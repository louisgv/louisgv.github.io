'use strict()';

function HomeCtrl($scope, $ionicLoading, DatabaseServ, $state, $ionicViewSwitcher) {
  console.log('HomeCtrl');

  var time = new Date();
  var h = time.getHours();

  if(h > 18) {
    $scope.greeting = "\tGood evening, I am";
  } else if(h > 12) {
    $scope.greeting = "    Good afternoon, I am";
  } else {
    $scope.greeting = "    Good morning! I am";
  }

  $scope.count = 0;
  $scope.chosen = {};

  if(!$scope.chosen) {
    $ionicLoading.show({
      templateUrl: 'mod/load.html',
      scope: $scope,
    });
  }
  $scope.$on('$ionicView.enter', function (e) {
    DatabaseServ.getEventCount(function (hackCount, gjamCount) {
      $scope.count = hackCount + gjamCount;
      $scope.hackCount = hackCount;
      $scope.gjamCount = gjamCount;
    });
    DatabaseServ.getRandomEvent(function (data) {
      $scope.chosen = data;
      $ionicLoading.hide();
    });
  });

  $scope.toHackAthon = function () {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('hack');
  }
  $scope.toGameJams = function () {
    $ionicViewSwitcher.nextDirection('forward');
    $state.go('gjam');
  }


  $scope.doRefresh = function () {
    DatabaseServ.getRandomEvent(function (data) {
      $scope.chosen = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
};
