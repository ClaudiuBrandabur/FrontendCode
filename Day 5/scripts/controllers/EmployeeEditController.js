hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    'DepartmentService', 'JobService', 'ManagerService', 'EmployeeService', '$filter',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, DepartmentService,
              JobService, ManagerService, EmployeeService, $filter) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.departments = {};
        $scope.managers = {};
        $scope.jobs = {};

        DepartmentService.findDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {

            });

        JobService.findJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {

            });

        ManagerService.findManagers()
            .then(function (res) {
                $scope.managers = ManagerService.findManagersFromEmployeeList(res.data);
            }, function (err) {

            });

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

        // $scope.$watch('employee.hireDate', function() {
        //     $scope.employee.hireDate = $filter('date')(new Date(),'yyyy-MM-dd');
        // });

    }]);
