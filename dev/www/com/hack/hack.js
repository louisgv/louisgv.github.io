'use strict()';

function HackathonController($scope, $ionicLoading, $ionicModal, DatabaseServ, $state, $ionicViewSwitcher) {
  console.log('HackCtrl');

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

  $scope.toHome = function () {
    $ionicViewSwitcher.nextDirection('forward');
    $state.go('home');
  }

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
    $scope.modal.show();
    // console.log($scope.chosen);
  }

  $scope.closeDetail = function () {
    $scope.modal.hide();
  };

  $scope.$on('$ionicView.enter', function (e) {
    DatabaseServ.getHacks(function (data) {
      $scope.events = data;
      $scope.count = data.length;
      $ionicLoading.hide();
    })
  });
};
