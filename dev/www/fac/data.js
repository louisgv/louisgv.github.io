'use strict()';

function DatabaseService($http) {

  var gjams;
  var hacks;

  var DB_URIS = [
    './com/gjam/gjam.json',
    './com/hack/hack.json'
  ]

  return {
    getEvent: function (uri, callback) {
      $http.get(uri)
        .success(function (data) {
          // The json data will now be in scope.
          // console.log(data);
          callback(data);
        });
    },
    getJams: function (callback) {
      this.getEvent(DB_URIS[0], function (data) {
        gjams = data.gjam;
        callback(data.gjam);
      });
    },
    getHacks: function (callback) {
      this.getEvent(DB_URIS[1], function (data) {
        hacks = data.hacks;
        callback(data.hack);
      });
    },
    getEventCount: function (callback) {
      var count = 0;
      this.getHacks(function (hacks) {
        count += hacks.length;
      });
      this.getJams(function (gjams) {
        // callback(count);
        count += gjams.length;
        callback(count);
      });
    },
    getRandomEvent: function (callback) {
      var i = Math.round(Math.random() * 2);
      this.getEvent(DB_URIS[i], function (events) {
        var j = Math.round(Math.random() * events.length);
        callback(events[j]);
      });
    },
  }
}
