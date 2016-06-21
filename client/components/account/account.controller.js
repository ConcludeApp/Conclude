'use strict';

class AccountModalController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $scope, $uibModalInstance, $rootScope) {
    $scope.me = Auth.getCurrentUser();
    $scope.close = function() {
      return $uibModalInstance.dismiss()
    }
    $rootScope.$on('$stateChangeSuccess', function() {
      return $uibModalInstance.dismiss()
    });
  }

}

angular.module('concludeApp')
  .controller('AccountModalController', AccountModalController);