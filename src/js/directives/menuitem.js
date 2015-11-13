angular.module("wgHilfe").directive("mdMenuItem", function() {
  return {
    require: '^mdMenuList',
    restrict: 'EA',
    template: '<md-button>Test</md-button>'
  };
});