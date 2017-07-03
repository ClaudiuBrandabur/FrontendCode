/**
 * Created by claudiu.brandabur on 03-Jul-17.
 */

hrApp.service('DepartmentService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findDepartments: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    });
            }
        }
    }]
);