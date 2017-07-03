hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'JobMenuServices',
    function ($scope, EmployeeActionsService, JobMenuServices) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList = JobMenuServices;
    $scope.currentDate = new Date();
}]);
