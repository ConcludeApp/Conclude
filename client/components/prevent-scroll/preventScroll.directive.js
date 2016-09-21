'use strict';

angular.module('concludeApp')
  .directive('showHint', function($document) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var el = angular.element(elem[0]),
            val, str;

        function splitVal(v, i) {
          return [v.substring(0, i), v.substring(i)]
        }

        el.on('focus', function(e) {
          str = el.val();
          val = splitVal(str, str.length - 1);
          el.val(val[0]);
          return setTimeout(()=> (el.val(val[0] + val[1])), 1);
        });
      }
    }
  });