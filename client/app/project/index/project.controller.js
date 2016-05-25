'use strict';

class ProjectController {

  constructor(Auth, $state, $scope, $http, $stateParams, $anchorScroll, $location) {
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;

    this.ShowSidebar = this.Share = false;

    $http.get('/api/projects/' + $stateParams.id)
      .then(res => {
        this.project = res.data;
      })

  }

}

angular.module('concludeApp')
  .controller('ProjectController', ProjectController);