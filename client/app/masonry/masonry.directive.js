'use strict';

angular.module('concludeApp')
  .directive('masonry', function($window) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        setTimeout(function() {
          var msnry = new $window.Masonry(elem[0], {
            itemSelector: '.grid-item'
          });
          return msnry;
        }, 100);
      }
    }
  });