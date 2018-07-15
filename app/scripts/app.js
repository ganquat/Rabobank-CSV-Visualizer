(function() {
	
	'use strict';

/**
 * @ngdoc overview
 * @name rabobankStmtProsApp
 * @description
 * # rabobankStmtProsApp
 *
 * Main module of the application.
 */
angular
  .module('rabobankStmtProsApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.selection', 
    'ui.grid.exporter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainctrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
})();
