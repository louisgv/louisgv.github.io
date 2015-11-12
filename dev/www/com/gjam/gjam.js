angular
  .module('louisgv.ctrl')
  .controller('GJamCtrl', function($scope, $ionicModal, $timeout, $http) {
    console.log('GJamCtrl');

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.jamDB = [];

    $http.get('/com/gjam/db.json').success(function(data) {
      // The json data will now be in scope.
      $scope.jamDB = data;
      console.log(data);
    });

  });
