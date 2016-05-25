'use strict';

angular.module('concludeApp.auth', ['concludeApp.constants', 'concludeApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
