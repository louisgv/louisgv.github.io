angular
  .module('louisgv.ctrl')
  .factory('GameJamData', [
    '$http',
    '$q',
    function($http, $q) {
      return {
        query: function() {
          var deferred = $q.defer();

          $http.get('com/gjam/db.json').success(function(data) {
            deferred.resolve(data);
          }).error(function(data) {
            deferred.reject(data);
          });

          return deferred.promise;
        }
      };
    }
  ])
  .controller('GJamCtrl', function($scope, GameJamData) {
    console.log('GJamCtrl');
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:

    $scope.jamDB = [];

    $scope.refresh = function() {
      GameJamData.query().then(function(data) {
        $scope.jamDB = data.jams;
        console.log(data);
      })
    };

    $scope.refresh();

  });
