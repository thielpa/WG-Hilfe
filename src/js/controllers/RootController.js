angular.module('wgHilfe')
  .controller('RootController', RootController);

function RootController($scope, $routeParams, GuideService) {

  GuideService.fetchData().then(function(data) {
    $scope.guides = data;
  }, function(error) {
    alert("Error");
    //TODO HANDLE THAT
  });

}