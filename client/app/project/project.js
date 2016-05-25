'use strict';

angular.module('concludeApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project/:id',
        templateUrl: 'app/project/index/project.html',
        controller: 'ProjectController',
        controllerAs: '$prjct'
      })
      .state('filter', {
        url: '/projects',
        templateUrl: 'app/project/browse/browse.html',
        controller: 'BrowseController',
        controllerAs: '$fltr'
      })
});