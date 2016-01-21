app.config(['$stateProvider', '$urlRouterProvider', 
  function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'app/templates/login.html'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'app/templates/home.html'
    })
  }
]);
