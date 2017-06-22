(function () {
    'use strict';
 
angular
    .module('app')
    .controller('section.FooterController', function($scope, $document) {
	    $scope.toTheTop = function() {
      $document.scrollTop(0, 5000);
    }
    var section2 = angular.element(document.getElementById('section-2'));
    $scope.toSection2 = function() {
      $document.scrollTo(section2, 30, 1000);
    }
          
});
    
})();