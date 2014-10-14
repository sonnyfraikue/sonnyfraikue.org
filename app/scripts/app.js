'use strict';

/**
 * @ngdoc overview
 * @name sonnyfraikueorgApp
 * @description
 * # sonnyfraikueorgApp
 *
 * Main module of the application.
 */
angular
  .module('sonnyfraikueorgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/usefulstuff',{
        templateUrl:'views/stuff.html',
        controller:'UsefulStuff'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
