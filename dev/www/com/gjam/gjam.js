angular
  .module('louisgv.ctrl')
  .controller('GJamCtrl', function($scope, $http, $ionicLoading) {
    console.log('GJamCtrl');

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    $ionicLoading.show({
     template: 'Loading...'
   });
    $scope.events = [];
    $scope.$on('$ionicView.enter', function(e) {
      $http.get('/com/gjam/db.json').success(function(data) {
        // The json data will now be in scope.
        // console.log(data);
        $scope.events = data.jams;
            $ionicLoading.hide();
      });
    });

  });
