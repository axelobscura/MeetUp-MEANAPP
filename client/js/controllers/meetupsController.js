app.controller('meetupsController', ['$scope', '$resource', function($scope, $resource){
  var Meetup = $resource('/api/meetups');

  Meetup.query(function(results){
    $scope.mettups = results;
  });

  $scope.mettups = []

  $scope.createMeetup = function(){
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result){
      $scope.mettups.push(result);
      $scope.meetupName = '';
    });
  }
}]);
