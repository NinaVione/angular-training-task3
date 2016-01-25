app.service('dataService', ['$rootScope', '$http', '$localStorage', '$sessionStorage',
  function ($rootScope, $http, $localStorage, $sessionStorage) {

    var users = [];
    var authenticated;


    return {
      getJson: function (callback) {
        $http.get('data/users.json')
          .then(function (result) {
            users = [];
            users = users.concat(result.data);
            callback(users);
          })
          .catch(function (result) {
            console.log('Request failed');
          });
      },

      login: function (username, password, callback) {
        var response = { 
          success: (username === 'user1' && password === 'user1') || (username === 'user2' && password === 'user2') 
        };
        if(!response.success) {
            response.message = 'Username or password is incorrect';
        }
        callback(response);
      },

      getUsers: function () {
        return users;
      },

      setStorage: function () {
        $rootScope.$storage = $localStorage.$default();
      },

      setStorageData: function (data) {
        $rootScope.$storage = data;
      },

      removeStorageData: function () {
        delete $localStorage.data;
      }
    }
  }
]);