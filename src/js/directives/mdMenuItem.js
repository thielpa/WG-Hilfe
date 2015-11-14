angular.module('wgHilfe')
  .directive('mdMenuItem', function() {
    return {
      restrict: 'AE',
      replace: false,
      template: '<md-button ng-href="{{ ngHref }}">{{ ngLabel }}</md-button>',
      scope: {
        ngHref: "@",
        ngLabel: "@"
      }
    };
});
