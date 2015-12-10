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
    getEventCount: function (callback) {
      var hackCount = 0;
      var gjamCount = 0;
      this.getHacks(function (hacks) {
        hackCount = hacks.length;
      });
      this.getJams(function (gjams) {
        // callback(count);
        gjamCount = gjams.length;
        callback(hackCount, gjamCount);
      });
    },
    getRandomEvent: function (callback) {
      var i = Math.round(Math.random());
      this.getEvents(DB_URIS[i], function (base) {
        var j = Math.round(Math.random() * base.length);
        // console.log(base);
        callback(base[j]);
      });
    },
  }
}
