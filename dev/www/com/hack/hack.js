angular.module('louisgv.ctrl')
  .controller('HackCtrl', function($scope, $http,$ionicLoading) {
    console.log('HackCtrl');

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $ionicLoading.show({
     template: 'Loading...'
    });
    $scope.events = [];
    $scope.$on('$ionicView.enter', function(e) {
      $http.get('https://raw.githubusercontent.com/louisgv/louisgv.github.io/master/dev/www/com/hack/hack.json').success(function(data) {
        // The json data will now be in scope.
        // console.log(data);
        $scope.events = data.hack;
        $ionicLoading.hide();
      });
    });
  });
