app.service('dataService', ['$rootScope', '$http', '$localStorage', '$sessionStorage',
  function ($rootScope, $http, $localStorage, $sessionStorage) {
    
    $rootScope.$storage = $localStorage;
    
    return {    
      getJson: function (callback) {
        $http.get('data/users.json')
          .then(function (result) {
            var users = [];
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

      setStorage: function () {
        $rootScope.$storage = $localStorage;
      },

      setStorageData: function (data) {
        $rootScope.$storage = data;
      },

      getStorageData: function () {
        return $rootScope.$storage;
      },

      removeStorageData: function () {
        delete $localStorage.data;
      }
    }
  }
]);