'use strict';

angular.module('concludeApp')
  .directive('projectMenu', function($document) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var target = angular.element(document.querySelector('#section-'+elem.attr('data-section')))[0],
            targetHeight = (target.offsetHeight / 3),
            minHeight = (targetHeight < 40) ? 40 : targetHeight;
        elem.css('height', minHeight+'px')
        elem.css('lineHeight', minHeight+'px')
      }
    }
  });