'use strict';

class Q1Controller {

  constructor(Auth, $state, $scope, $http, $rootScope) {
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;

    $scope.$project = $scope.$project ? $scope.$project : {};

    $http.get('/api/taxonomy/categories')
      .then(res => {
        $scope.$categories = res.data;
      })
    $http.get('/api/taxonomy/subcategories')
      .then(res => {
        $scope.$subcategories = res.data;
      })
    $http.get('/api/products')
      .then(res => {
        $scope.$products = res.data;
      });
    $rootScope.getMethods = function(q) {
      $http.post('/api/projects/recommended', {params: $scope.$project})
        .then(res => {
          return $rootScope.methods = res.data;
        });
    }
    $rootScope.getMethods()
    $rootScope.recommendedMethods = []
  }

}

angular.module('concludeApp')
  .controller('Q1Controller', Q1Controller);