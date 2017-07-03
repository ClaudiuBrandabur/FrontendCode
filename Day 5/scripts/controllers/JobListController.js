hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $location, CommonResourcesFactory) {

        $scope.jobs = [];

        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };

        $scope.deleteJob = function (job) {
            $http({url: CommonResourcesFactory.deleteJobUrl, method: 'DELETE', data: job,
                headers: {
                    "Content-Type": "application/json"
                }})
                .success(function (data, status, headers, config) {
                    $location.url('/jobList');
                });

        }

    }]);