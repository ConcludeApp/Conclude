'use strict';

angular.module('concludeApp')
  .directive('projectMenu', function($document) {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var itemHeight = (elem[0].offsetHeight / 9);
        console.log(itemHeight)
        elem.find('li').css('height', itemHeight+'px')
        elem.find('li').css('lineHeight', itemHeight+'px')
      }
    }
  });