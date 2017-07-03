/**
 * Created by claudiu.brandabur on 03-Jul-17.
 */

hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagers: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;
                    });
            },
            findManagersFromEmployeeList: function (data) {
                var managersID = {};
                var managersList = [];

                for(var index in data)
                    if (data[index].managerId != null)
                        if (managersID[data[index].managerId.employeeId] === undefined) {
                            managersID[data[index].managerId.employeeId] = true;
                            managersList.push(data[index].managerId);
                        }

                return managersList;
            }
        }
    }]
);
