app.service('dataService', ['$http', 
  function ($http) {

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

      getUsers: function () {
        return users;
      },

      setAuthentication: function (authenticated) {
        this.authenticated = authenticated;
      },

      isAuthenticated: function () {
        return authenticated;
      }
    }
  }
]);