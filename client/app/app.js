'use strict';

angular.module('concludeApp', ['concludeApp.auth', 'concludeApp.admin', 'concludeApp.constants', 'ngTagsInput', 'slickCarousel',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match', 'ui.select', 'ngMask', 'duScroll', 'yaru22.angular-timeago', 'puElasticInput', 'monospaced.elastic', 'angularTrix'
  ]).config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })
  // Config
  .value('duScrollOffset', 80)
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $rootScope.ShowMainSidebar = false;  
    });
    $rootScope.ShowMainSidebar = false;
    $rootScope.showMainSidebar = function() {
      return $rootScope.ShowMainSidebar = !$rootScope.ShowMainSidebar;
    }
  });