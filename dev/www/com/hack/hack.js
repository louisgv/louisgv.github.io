'use strict()';

function HackathonController($scope, $ionicLoading, DatabaseServ) {
  console.log('HackCtrl');

  $ionicLoading.show({
    template: 'Loading...'
  });
  $scope.events = [];
  $scope.$on('$ionicView.enter', function (e) {
    DatabaseServ.getHacks(function (data) {
      $scope.events = data;
      $ionicLoading.hide();
    })
  });

};
