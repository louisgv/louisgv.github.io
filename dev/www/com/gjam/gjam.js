'use strict()';

function GameJamController($scope, $ionicLoading, DatabaseServ, $ionicModal, $state, $ionicViewSwitcher) {
  console.log('GJamCtrl');

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $ionicLoading.show({
    templateUrl: 'mod/load.html',
    scope: $scope,
  });

  $scope.events = [];
  $scope.chosen = {};
  $scope.current = 0;

  $ionicModal.fromTemplateUrl('mod/detail.html', {
      scope: $scope,
      animation: 'animated slideInRight',
      // hideDelay: 450
    })
    .then(function (modal) {
      $scope.modal = modal;
    });

  $scope.previousEvent = function () {
    if($scope.current > 0) {
      $scope.chosen = $scope.events[--$scope.current];
      // $scope.modal.hide();
    }
  }

  $scope.nextEvent = function () {
    $scope.chosen = $scope.events[++$scope.current];
    // $scope.modal.hide();
  }

  $scope.showDetail = function (e) {
    $scope.current = e;
    $scope.chosen = $scope.events[e];
    console.log($scope.chosen);
    $scope.modal.show();
  }

  $scope.closeDetail = function () {
    $scope.modal.hide();
  };

  $scope.$on('$ionicView.enter', function (e) {
    DatabaseServ.getJams(function (data) {
      $scope.events = data;
      $scope.count = data.length;
      $ionicLoading.hide();
    })

  });

  $scope.toHome = function () {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('home');
  }
};
