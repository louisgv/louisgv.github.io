angular
  .module('louisgv.ctrl', [])
  .controller('HomeCtrl', function($scope) {
    console.log('HomeCtrl');

    var time = new Date();
    var h = time.getHours();

    if (h > 18) {
      $scope.greeting = "\tGood evening, I am";
    } else if (h > 12) {
      $scope.greeting = "    Good afternoon, I am";
    } else {
      $scope.greeting = "    Good morning! I am";
    }

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

  });
