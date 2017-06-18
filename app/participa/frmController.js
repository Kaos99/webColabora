(function () {
    'use strict';
 
angular
    .module('app')
    .controller('FrmController', function($scope) {
	    $scope.comment = [];
                $scope.btn_add = function() {
                    if($scope.txtcomment !=''){
                    $scope.comment.push($scope.txtcomment);
                    $scope.txtcomment = "";
                    }
                }
          
});
    
})();