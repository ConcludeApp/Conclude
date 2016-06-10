'use strict';

class Q3Controller {
  constructor(Auth, $state, $scope, $rootScope) {
    this.Auth = Auth;
    this.$state = $state;
    $scope.setPhase = function(n) {
      var index = _.findIndex($rootScope.recommendedMethods, 'phase');
      console.log(index)
      if (index > -1) {
        $rootScope.recommendedMethods.splice(index, 1);
      }
      return $rootScope.recommendedMethods.push({'phase': n});
    }
  }

}

angular.module('concludeApp')
  .controller('Q3Controller', Q3Controller);
