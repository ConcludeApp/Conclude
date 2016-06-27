'use strict';

angular.module('concludeApp')
  .directive('fixScroll', function($window) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        // On Scroll, if elem.distanceTop > header.outerHeight + 20, then LOCK THAT DOWN BOY.
        var $win  = angular.element($window),
            dist  = angular.element(elem).offset().top - 70,
            left  = angular.element(elem).offset().left;
        $win.on('scroll', function(e) {
          if ($win.scrollTop() > dist) {
            return angular.element(elem)
              .css('position', 'fixed')
              .css('left', left)
              .css('top', 60);
          } else {
            return angular.element(elem)
              .css('position', 'absolute')
              .css('left', 'initial')
              .css('top', 'initial');
          }
        });
      }
    }
  });