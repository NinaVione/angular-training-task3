app.controller('updateInfoController', ['$scope', 'dataService',
  function($scope, dataService)   {

    $scope.submitChanges = function () {

      var user = dataService.getStorageData().user;

      var currentUser = dataService.getStorageDataByField(user.username);

      var userInfo = {
        username: user.username,
        name: $scope.name || currentUser.name,
        email: $scope.email || currentUser.email,
        old: $scope.old  || currentUser.old
      };

      dataService.setStorageData('user', userInfo);
      dataService.setStorageData(user.username ,userInfo);
    };

  }
]);