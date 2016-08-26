'use strict';
angular.module('kitTestApp').directive('slideToggleDirective', function($window) {
  return {
    restrict: 'A',
    scope:{
      isOpen: '=slideToggleDirective'
    },
    link: function(scope, element) {
      scope.$watch('isOpen', function(newVal, oldVal){
        if(newVal !== oldVal){
          element.slideToggle();
        }
      });

      element.on('click', function() {
        if($window.innerWidth < 480 ) {
          element.slideToggle();
        }
      });

      angular.element($window).bind('resize', function() {
        if($window.innerWidth > 480 && element.is(':hidden')) {
          element.removeAttr('style');
        }
        scope.$digest();
      });
    }
  };
});
