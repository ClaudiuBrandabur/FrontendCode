/**
 * Created by claudiu.brandabur on 03-Jul-17.
 */

hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    });
            }
        }
    }]
);