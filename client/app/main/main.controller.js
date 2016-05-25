'use strict';

(function() {

  class MainController {

    constructor($http, Auth, $scope, $rootScope) {
      this.$http = $http;
      this.awesomeThings = [1,2,3];
      $scope.Auth = Auth;

      Auth.getCurrentUser(res => {
        $rootScope.$me = res;
      })
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }

  }

  angular.module('concludeApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
