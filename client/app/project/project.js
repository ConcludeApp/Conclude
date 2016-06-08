'use strict';

angular.module('concludeApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project/:id',
        templateUrl: 'app/project/index/project.html',
        controller: 'ProjectController',
        controllerAs: '$prjct',
        resolve: {
          project: function($http, $stateParams, Auth, $state) {
            return $http({method: 'POST', url: '/api/projects/' + $stateParams.id})
          }
        }
      })
      .state('filter', {
        url: '/',
        templateUrl: 'app/project/browse/browse.html',
        controller: 'BrowseController',
        controllerAs: '$fltr',
        resolve: {
          projects: function($http, $stateParams) {
            return $http({method: 'POST', url: '/api/projects/index'})
          }
        }
      })
});