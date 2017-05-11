(function() {
  var app = angular.module('dataDashApp', []);

  app.controller('dataDashController', function($scope) {
      // Data
      $scope.data = [{
        distance: 3.24,
        time: 34,
        date: new Date("May 01, 2015")
      }, {
        distance: 4.24,
        time: 38,
        date: new Date("May 12, 2015")
      }, {
        distance: 3.67,
        time: 37,
        date: new Date("May 23, 2015")
      }, {
        distance: 6.50,
        time: 59,
        date: new Date("June 02, 2015")
      }, {
        distance: 5.64,
        time: 52,
        date: new Date("June 12, 2015")
      }, {
        distance: 4.90,
        time: 45,
        date: new Date("June 22, 2015")
      }, {
        distance: 3.6,
        time: 33,
        date: new Date("July 07, 2015")
      }, {
        distance: 8.56,
        time: 81,
        date: new Date("July 17, 2015")
      }, {
        distance: 9.34,
        time: 92,
        date: new Date("July 31, 2015")
      }, {
        distance: 10.1,
        time: 98,
        date: new Date("August 11, 2015")
      }, {
        distance: 7.56,
        time: 59,
        date: new Date("August 27, 2015")
      }, {
        distance: 9.3,
        time: 84,
        date: new Date("August 31, 2015")
      }, {
        distance: 6.7,
        time: 54,
        date: new Date("September 2, 2015")
      }, {
        distance: 11.43,
        time: 108,
        date: new Date("September 12, 2015")
      }, {
        distance: 4.5,
        time: 34,
        date: new Date("September 22, 2015")
      }, {
        distance: 13.1,
        time: 128,
        date: new Date("October 18, 2015")
      }, {
        distance: 6.4,
        time: 58,
        date: new Date("October 26, 2015")
      }]

      console.log($scope.data)
        // Count days & months

      $scope.daysJogged = [{
        day: 'Sunday',
        count: 0
      }, {
        day: 'Monday',
        count: 0
      }, {
        day: 'Tuesday',
        count: 0
      }, {
        day: 'Wednesday',
        count: 0
      }, {
        day: 'Thursday',
        count: 0
      }, {
        day: 'Friday',
        count: 0
      }, {
        day: 'Saturday',
        count: 0
      }]

      $scope.monthsJogged = [{
        month: 'January',
        count: 0
      }, {
        month: 'February',
        count: 0
      }, {
        month: 'March',
        count: 0
      }, {
        month: 'April',
        count: 0
      }, {
        month: 'May',
        count: 0
      }, {
        month: 'June',
        count: 0
      }, {
        month: 'July',
        count: 0
      }, {
        month: 'August',
        count: 0
      }, {
        month: 'September',
        count: 0
      }, {
        month: 'October',
        count: 0
      }, {
        month: 'November',
        count: 0
      }, {
        month: 'December',
        count: 0
      }];

      $scope.total = 0;

      // For Loop to count
      for (var i = 0; i < $scope.data.length; i++) {
        // Count total activites
        $scope.total++;
        // Set pace
        $scope.data[i].pace = $scope.data[i].time / $scope.data[i].distance;
        // Get Day number
        var day = $scope.data[i].date.getDay();
        // Increase Day count
        $scope.daysJogged[day].count++;
        // Get Month number
        var month = $scope.data[i].date.getMonth();
        // Increase Month Count
        $scope.monthsJogged[month].count++;


      };

      // Maximum Distance
      $scope.maxDistance = Math.max.apply(Math, $scope.data.map(function(o) {
          return o.distance;
        }))
        // Maximum Time
      $scope.maxTime = Math.max.apply(Math, $scope.data.map(function(o) {
          return o.time;
        }))
        // Maximum Pace
      $scope.maxPace = Math.max.apply(Math, $scope.data.map(function(o) {
          return o.pace;
        }))
        //Minimum Pace
      $scope.minPace = Math.min.apply(Math, $scope.data.map(function(o) {
        return o.pace;
      }))

      // Nicenames for day counts

      $scope.monday = $scope.daysJogged[1].count;

      $scope.tuesday = $scope.daysJogged[2].count;

      $scope.wednesday = $scope.daysJogged[3].count;

      $scope.thursday = $scope.daysJogged[4].count;

      $scope.friday = $scope.daysJogged[5].count;

      $scope.saturday = $scope.daysJogged[6].count;

      $scope.sunday = $scope.daysJogged[0].count;

      // Get the relative pace in the range

      for (var j = 0; j < $scope.data.length; j++) {
        var item = $scope.data[j];
        item.relPace = (item.pace - $scope.minPace) / ($scope.maxPace - $scope.minPace);

      }

    }) // End Controller

})();
