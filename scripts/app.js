'use strict';

angular.module('angularJs2BbApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dibujo.html',
        controller: 'ctrlDibujo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
