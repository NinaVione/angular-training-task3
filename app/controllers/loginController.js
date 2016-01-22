app.controller('loginController', ['$rootScope', '$scope','$state', '$http', 'dataService',
  function ($rootScope, $scope, $state, $http, dataService) {

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

      for(var user in $scope.users) {
        if(userData.username == $scope.users[user].username && userData.password == $scope.users[user].password) {
          dataService.setAuthentication(true);
          break;
        }
      }   
    };
  }
]);