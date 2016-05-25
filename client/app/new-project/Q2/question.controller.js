'use strict';

class Q2Controller {
  constructor(Auth, $state, $scope) {

    this.Auth = Auth;
    this.$state = $state;

    $scope.months = [
      {'label': 'January', 'value': '01'}, 
      {'label': 'February', 'value': '02'}, 
      {'label': 'March', 'value': '03'}, 
      {'label': 'April', 'value': '04'}, 
      {'label': 'May', 'value': '05'}, 
      {'label': 'June', 'value': '06'}, 
      {'label': 'July', 'value': '07'}, 
      {'label': 'August', 'value': '08'}, 
      {'label': 'September', 'value': '09'}, 
      {'label': 'October', 'value': '10'}, 
      {'label': 'November', 'value': '11'}, 
      {'label': 'December', 'value': '12'}, 
    ];
    $scope.days = [
      {'label': '01', 'value': '01'},
      {'label': '02', 'value': '02'},
      {'label': '03', 'value': '03'},
      {'label': '04', 'value': '04'},
      {'label': '05', 'value': '05'},
      {'label': '06', 'value': '06'},
      {'label': '07', 'value': '07'}
    ]
    $scope.years = [
      {'label': 2016},
      {'label': 2017},
      {'label': 2018},
      {'label': 2019},
      {'label': 2020}
    ]

    $scope.$project.endDate = $scope.$project.endDate ? $scope.$project.endDate : {}

  }

}

angular.module('concludeApp')
  .controller('Q2Controller', Q2Controller);
