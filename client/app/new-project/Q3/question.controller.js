'use strict';

class Q3Controller {
  constructor(Auth, $state, $scope) {
    this.Auth = Auth;
    this.$state = $state;
  }

}

angular.module('concludeApp')
  .controller('Q3Controller', Q3Controller);
