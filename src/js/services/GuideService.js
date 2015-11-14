angular.module('wgHilfe')
  .service('GuideService', GuideService);

function GuideService($q, $http) {

  this.fetchData = function() {
    return $q(function(resolve, reject) {
      $http.get("content/guides/guides.json").then(function(success) {
        resolve(success.data);
      }, function(failure) {
        resolve(failure);
      });
    });
  };

}