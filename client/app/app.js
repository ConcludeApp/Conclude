'use strict';

angular.module('concludeApp', ['concludeApp.auth', 'concludeApp.admin', 'concludeApp.constants', 'ngTagsInput',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match', 'ui.select', 'ngMask', 'duScroll', 'yaru22.angular-timeago'
  ]).config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })
  // Config
  .value('duScrollOffset', 80)