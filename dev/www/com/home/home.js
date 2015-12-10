'use strict()';

function HomeCtrl($scope, $ionicLoading, DatabaseServ) {
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

  $ionicLoading.show({
    templateUrl: 'mod/load.html',
    scope: $scope,
  });

  $scope.count = 0;
  $scope.chosen = {};
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

  $scope.doRefresh = function () {
    DatabaseServ.getRandomEvent(function (data) {
      $scope.chosen = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
};
