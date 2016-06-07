'use strict';

class DirectQuotesModalController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $scope, $http, $state, params, $uibModalInstance, $document) {
    $scope.project = params.project
    $scope.me = Auth.getCurrentUser();
    $scope.project.quotes = [{}]

    var body = angular.element($document[0].body);

    $scope.close = function() {
      body.css('overflow', 'auto');
      $scope.project.quotes = null
      return $uibModalInstance.dismiss()
    }

    $scope.save = function() {
      $http.put('/api/projects/'+$scope.project._id, $scope.project)
        .then(res => {
          body.css('overflow', 'auto');
          $scope.project.__v = res.data.__v;
          return $uibModalInstance.dismiss()
        })
    }

  }

}

angular.module('concludeApp')
  .controller('DirectQuotesModalController', DirectQuotesModalController);