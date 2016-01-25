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

      login: function (username, password, users, callback) {
        var response = {
          success: false
        };
        for(var user in users) {
          if(username == users[user].username && password == users[user].password) {
            response.success = true;
            break;
          }
        }
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