'use strict';

class PersonaModalController {
  //end-non-standard

  //start-non-standard
  constructor(params, $uibModalInstance, $scope) {
    $scope.persona = params.persona;
    console.log(params.persona)
    $scope.close = function() {
      body.css('overflow', 'auto');
      $scope.project.implications = null;
      return $uibModalInstance.dismiss()
    }

  }

}

angular.module('concludeApp')
  .controller('PersonaModalController', PersonaModalController);