'use strict';

class ImplicationsModalController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $scope, $http, $state, params, $uibModalInstance, $document) {
    $scope.project = params.project
    $scope.me = Auth.getCurrentUser();

    var body = angular.element($document[0].body);

    $scope.tab = 'Sales'

    $scope.project.implications = [
      {
        implicationType: 'Sales'
      },
      {
        implicationType: 'Support'
      },
      {
        implicationType: 'Product'
      },
      {
        implicationType: 'Design'
      },
      {
        implicationType: 'Marketing'
      },
    ]

    $scope.close = function() {
      body.css('overflow', 'auto');
      $scope.project.implications = null
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

    $scope.setTab = function(title) {
      return $scope.tab = title;
    }

  }

}

angular.module('concludeApp')
  .controller('ImplicationsModalController', ImplicationsModalController);