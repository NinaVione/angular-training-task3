app.controller('logoutController', [ '$scope', 'dataService',
  function ($scope, dataService) {

    $scope.signOut = function () {
      dataService.removeStorageData('user');
    };
  }
]);