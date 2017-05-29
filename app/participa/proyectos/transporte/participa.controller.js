(function () {
    'use strict';
 
angular
    .module('app')
    .controller('ParticipaTransporte.ActionController', function($scope) {
	// .chart - large blob of JSON chart data {{{
	$scope.chart = 
	{
	 "name": "flare",
	 "children": [
	  {
	   "name": "",
	   "classed": "danger",
	   "color": "#FF0000",
	   "children": [
		{"name": "", "size": 20000, "url":  ""},
		{"name": "","size": 20000, "url":  ""},
		{"name": "","size": 10000,"url": ""}
	   ]
	  },
	  {
	   "name": "TRANSPORTE",
	   "children": [
		{"name": "Tren Moncloa-Majadahonda", "size": 8010,"url": "/app/#/participa/proyecto4"},
		{"name": "Metro a El Casar", "size": 5842,"url": "/app/#/participa/proyecto5"},
		{"name": "Lineas de Bus Expres", "size": 5049,"url": "/app/#/participa/proyecto6"}
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 1759},
		{"name": "", "size": 2165},
		{"name": "", "size": 3322}
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 6833},
		{"name": "", "size": 3732},
		{"name": "", "size": 3623}
		
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 9116}
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 3082},
		{"name": "", "size": 3336},
		{"name": "", "size": 5498}
	   ]
	  }
	 ]
	};
	// }}}

	$scope.tooltipFunc = function(branch) {
		return branch.name;
	};
});
    
})();

//http://bl.ocks.org/biovisualize/5372077