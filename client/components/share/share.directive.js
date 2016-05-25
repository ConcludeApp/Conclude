'use strict';

angular.module('concludeApp')
  .directive('shareProject', () => ({
    templateUrl: 'components/share/share.html',
    restrict: 'A',
    controller: 'ShareController',
    controllerAs: 'share'
  }));
