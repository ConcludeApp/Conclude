'use strict';

class Q1Controller {

  constructor(Auth, $state, $scope, $http) {
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
  }

}

angular.module('concludeApp')
  .controller('Q1Controller', Q1Controller);