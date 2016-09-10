'use strict';

angular.module('concludeApp')
  .directive('sizeNav', function($window) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {

        var $win  = angular.element($window),
            h     = $win.outerHeight() - 120,
            $el   = angular.element(elem[0])[0],
            $list = $el.querySelectorAll('li');
        $el.style.height = `${h}px`;
        for (var i = $list.length - 1; i >= 0; i--) {
          $el = angular.element($list[i])[0];
          $el.style.lineHeight = (h / $list.length) + 'px';
        }

      }
    }
  });