'use strict';

angular.module('concludeApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('new', {
        url: '/new',
        templateUrl: 'app/new-project/Q1/question.html',
        controller: 'Q1Controller',
        controllerAs: 'q1'
      })
      .state('new.Q2', {
        url: '/insights',
        templateUrl: 'app/new-project/Q2/question.html',
        controller: 'Q2Controller',
        controllerAs: 'q2'
      })
      .state('new.Q3', {
        url: '/phase',
        templateUrl: 'app/new-project/Q3/question.html',
        controller: 'Q3Controller',
        controllerAs: 'q3'
      })
      .state('new.Q4', {
        url: '/method',
        templateUrl: 'app/new-project/Q4/question.html',
        controller: 'Q4Controller',
        controllerAs: 'q4'
      })
      .state('new.wizard', {
        url: '/:id',
        templateUrl: 'app/new-project/wizard/index.html',
        controller: 'NewProjectFormController',
        controllerAs: 'NewProject'
      });
});