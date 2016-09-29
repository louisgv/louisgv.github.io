'use strict()';

function HomeCtrl($scope, $ionicLoading, DatabaseServ, $state, $ionicViewSwitcher, $ionicPopup) {
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

  $ionicPopup.alert({
    title: 'Hello, this is Louis\' Hackathon Portfolio!',
    template: 'This is where he showcases his hackathon journey. Click on the shuffle to see a random hackathon project. Or click on either the Hackathon button or the GameJam button below to see the fullist. Or better yet, just Swipe left or right!',
    okType: "button-assertive"
  });

  $scope.chosen = {};

  if(!$scope.chosen) {
    $ionicLoading.show({
      templateUrl: 'mod/load.html',
      scope: $scope,
    });
  }
  $scope.$on('$ionicView.enter', function (e) {
    DatabaseServ.getHacks(function (hack) {
      $scope.hackCount = hack.length;
    });
    DatabaseServ.getJams(function (jams) {
      $scope.gjamCount = jams.length;
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
