'use strict';

angular.module('concludeApp')
  .directive('filterTrack', function($window) {
    return {
      restrict: 'AE',
      link: function(scope, elem, attr) {
        var track = document.querySelector('.group'),
            width = 0,
            tags, input;
        scope.$watch('$fltr.appliedFilters.length', function(o,n) {
          setTimeout(function() {
            tags = angular.element(document.querySelector('.tags-row'))[0]
            input = angular.element(document.querySelector('input'))[0]
            return angular.element(track).css('width', tags.clientWidth + input.clientWidth + 'px')
          }, 100)
        });
        return
      }
    }
  });