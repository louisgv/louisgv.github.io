angular.module('louisgv.ctrl', [])
  .controller('HomeCtrl', function($scope, $ionicModal, $timeout) {
    console.log('HomeCtrl');

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.playlists = [{
      title: 'Reggae',
      id: 1,
    }, {
      title: 'Chill',
      id: 2,
    }, {
      title: 'Dubstep',
      id: 3,
    }, {
      title: 'Indie',
      id: 4,
    }, {
      title: 'Rap',
      id: 5,
    }, {
      title: 'Cowbell',
      id: 6,
    },];
  });
