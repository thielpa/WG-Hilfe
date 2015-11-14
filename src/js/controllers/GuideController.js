angular.module('wgHilfe')
  .controller('GuideController', GuideController);

function GuideController($scope, $routeParams, GuideService) {

  var id = $routeParams.id;

  alert(id);

}