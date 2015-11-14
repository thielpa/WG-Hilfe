angular.module('wgHilfe')
  .controller('GuideController', GuideController);

function GuideController($scope, $routeParams, GuideService) {

  var guides;
  var id = $routeParams.id;

  GuideService.fetchData().then(function(data) {
    guides = data;
    loadGuide();
  }, function(error) {
    alert("An error occoured");
    //TODO HANDLE THAT ERROR
  });

  function loadGuide() {
    if (angular.isDefined(guides[id])) {
      var guide = guides[id];
      $scope.title = guide.title;
      $scope.path = 'content/guides/' + guide.path;
    } else {
      alert("GUIDE DOESNT EXISTS");
      //TODO HANDLE THAT ERROR
    }
  }


}