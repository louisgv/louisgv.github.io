'use strict()';

function DatabaseService($http) {

  var gjams;
  var hacks;

  var DB_URIS = [
    './com/gjam/gjam.json',
    './com/hack/hack.json'
  ];

  return {
    getEvents: function (uri, callback) {
      $http.get(uri)
        .success(function (data) {
          // The json data will now be in scope.
          // console.log(data);
          callback(data.base);
        });
    },
    getJams: function (callback) {
      this.getEvents(DB_URIS[0], function (base) {
        gjams = base;
        callback(gjams);
      });
    },
    getHacks: function (callback) {
      this.getEvents(DB_URIS[1], function (base) {
        hacks = base;
        callback(hacks);
      });
    },
    getRandomEvent: function (callback) {
      var i = Math.round(Math.random());
      this.getEvents(DB_URIS[i], function (base) {
        var j = Math.floor(Math.random() * base.length);
        // console.log(base);
        callback(base[j]);
      });
    },
  }
}
