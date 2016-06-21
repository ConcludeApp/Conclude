'use strict';

angular.module('concludeApp')
  .directive('sidebar', function($http, $stateParams, $rootScope, $uibModal) {
    return {
      templateUrl: 'components/sidebar/sidebar.html',
      restrict: 'E',
      link: function(scope, element) {
        scope.searchProjects = function() {
          scope.searching = true;
          $http.post('/api/projects/search', {query: scope.ProjectSearch})
            .then(res => {
              scope.results = res.data;
              return scope.searching = false
            })
          return true;
        }
        $rootScope.$on('$stateChangeSuccess', function() {
          return scope.ProjectSearch = '';
        });
        scope.viewAccount = function() {
          return $uibModal.open({
            templateUrl: '/components/account/account.html',
            controller: 'AccountModalController',
          });
        }
      }
    };
  });