hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    'DepartmentService', 'JobService', 'ManagerService',
    function($scope, $http, $location, CommonResourcesFactory, DepartmentService, JobService, ManagerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
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

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);