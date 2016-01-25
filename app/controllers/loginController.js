app.controller('loginController', ['$rootScope', '$scope','$state', 'dataService', '$state',
  function ($rootScope, $scope, $state, dataService, $state) {

    dataService.getJson(function (users) {
      $scope.setUsers(users);
      console.log(users);
    });

    $scope.setUsers = function (users) {
      $scope.users = users;
    }

    $scope.signIn = function () {
      var userData = {
        username: $scope.username,
        password: $scope.password
      };

      dataService.login(userData.username, userData.password, $scope.users, function (response) {
        if(response.success) {
          dataService.setStorage();
          dataService.setStorageData(userData);
          $state.go('home');
        } else {
          $scope.error = response.message;
        }
      });
    };
  }
]);