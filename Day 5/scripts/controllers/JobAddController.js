/**
 * Created by claudiu.brandabur on 03-Jul-17.
 */

hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function($scope, $http, $location, CommonResourcesFactory) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";

        //TODO #HR1


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        /**
         * Persist an job
         * @param addJob - job to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactory.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/employeeView/' + $scope.job.jobId);
                });
        };


    }]);