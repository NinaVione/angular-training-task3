app.controller('infoController', ['$scope', 'dataService',
  function ($scope, dataService) {
    $scope.user = dataService.getStorageData();
  }
]);