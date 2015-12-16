// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var app = angular
  .module('louisgv', ['ionic'])
  .config(config)
  .run(run)
  .directive('img-on-load', ImageOnLoad)
  .factory ('DatabaseServ', DatabaseService)
  .controller('HomeCtrl', HomeCtrl)
  .controller('GJamCtrl', GameJamController)
  .controller('HackCtrl', HackathonController);

function config($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  console.log('config');
  $ionicConfigProvider.views.forwardCache(true);
  // if none of the states below are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
      // TODO: Make into Home Pageurl: '/',
      url: '/',
      templateUrl: 'com/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('gjam', {
      url: '/gjam',
      templateUrl: 'com/gjam/gjam.html',
      controller: 'GJamCtrl'
    })
    .state('hack', {
      url: '/hack',
      templateUrl: 'com/hack/hack.html',
      controller: 'HackCtrl'
    });
}

function run($ionicPlatform) {
  console.log('run');

  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}
