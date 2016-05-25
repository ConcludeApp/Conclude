'use strict';

class ShareController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $scope, $http) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.me = Auth.getCurrentUser();
    this.project = $scope.$prjct.project ? $scope.$prjct.project : null;
    
    $http.get('/api/users')
      .then(res => {
        this.users = res.data;
      })

  }

}

angular.module('concludeApp')
  .controller('ShareController', ShareController);