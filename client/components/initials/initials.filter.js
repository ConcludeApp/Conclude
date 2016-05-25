'use strict';

angular.module('concludeApp')
  .filter('initials', () => {
    return function(name) {
      return name.replace(/\W*(\w)\w*/g, '$1').toUpperCase()
    }
  });