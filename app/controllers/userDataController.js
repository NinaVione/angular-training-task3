app.controller('userDataController', ['$rootScope', '$scope',
  function($rootScope, $scope)   {
    $scope.user = {
      email: "",
      password: ""
    };
  }
]);