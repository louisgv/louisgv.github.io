// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular
  .module('louisgv', [
    'ionic',
    'louisgv.ctrl',
  ])
  .run(function($ionicPlatform) {
    console.log('run');
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    console.log('config');

    // if none of the states below are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state ('home', { // TODO: Make into Home Page
        url: '/',
        views: {
          menuContent: {
            templateUrl: 'com/abc/tmpl.html',
            controller: 'HomeCtrl',
          },
        },
      })
      .state('men', { //TODO: Change to MenuCtrl
        url: '/men',
        abstract: true,
        templateUrl: 'com/men/tmpl.html',
        controller: 'MenuCtrl',
      })
      .state('jam', {
        url: '/jam',
        views: {
          menuContent: {
            templateUrl: 'com/jam/tmpl.html',
            controller: 'JamCtrl',
          },
        },
      })
      .state('hat', {
        url: '/hat',
        views: {
          menuContent: {
            templateUrl: 'com/jam/tmpl.html',
            controller: 'HatCtrl',
          },
        },
      });
  });
