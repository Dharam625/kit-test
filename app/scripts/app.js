  'use strict';

  /**
   * @ngdoc overview
   * @name kitTestApp
   * @description
   * # kitTestApp
   *
   * Main module of the application.
   */
  var kitTestApp = angular.module('kitTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ]);

  kitTestApp.config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/profile-info.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profileCtrl'
      })
      .when('/technicalResource', {
        templateUrl: 'views/technical-resource-info.html',
        controller: 'TechnicalResourceInfoCtrl',
        controllerAs: 'techResourceCtrl'
      })
      .when('/jsApplication', {
        templateUrl: 'views/pigLatinTranslator.html',
        controller: 'PigLatinTranslatorCtrl',
        controllerAs: 'pigLatinTranslatorCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });

      $translateProvider.useMissingTranslationHandlerLog();
      $translateProvider.useStaticFilesLoader({
        prefix: 'resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
      });

      $translateProvider.preferredLanguage('en_US');// is applied on first load
      $translateProvider.use('en_US');
      $translateProvider.useSanitizeValueStrategy('sanitize');
  });
