app.config(['$stateProvider', '$urlRouterProvider', 
  function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'app/templates/login.html',
      controller: 'loginController',
    })

    .state('home', {
      url: '/home',
      templateUrl: 'app/templates/home.html',
      resolve: {
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 3000);
          return delay.promise;
        }
      }
    })
  }
]);
