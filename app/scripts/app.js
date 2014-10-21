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
      .when('/education', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/code',{
        templateUrl:'views/stuff.html',
        controller:'UsefulStuff'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
