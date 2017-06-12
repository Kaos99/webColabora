(function () {
    'use strict';
 
angular
    .module('app')
    .controller('GaugeCtrl.ActionController', function($scope) {
	// .chart - large blob of JSON chart data {{{
	$scope.unit = 100;
    $scope.minorUnit = 1;
    $scope.majorUnit = 10;
        $scope.options = {
            size: 800,
            scale: {
                baseLineColor: "silver",
                majorUnitColor: "grey",
                minorUnitColor: "rgba(52,152,219,.5)"
            },
            markers: [{ unit: 30, color: "#f04c41" }, { unit: 17, color: "#b2defb" }, { unit: 53, color: "#445461" }]
        };
        
});
    
})();
