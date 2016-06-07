'use strict';

angular.module('concludeApp')
  .directive('preventScroll', function($document) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var body = angular.element($document[0].body[0]);
        elem.bind('mouseover', function(e) {
          body.css('overflow', 'hidden')
        });
        elem.bind('mouseleave', function(e) {
          body.css('overflow', 'auto')
        });
      }
    }
  });