(function () {
    'use strict';
 
angular
    .module('app')
    .controller('ParticipaUrbanismo.ActionController', function($scope) {
	// .chart - large blob of JSON chart data {{{
	$scope.chart = 
	{
	 "name": "flare",
	 "children": [
	  {
	   "name": "URBANISMO",
	   "classed": "danger",
	   "color": "#FF0000",
	   "children": [
		{"name": "El Cañaveral", "size": 20000, "url":  "/app/#/participa/proyecto1"},
		{"name": "La Peineta","size": 20000, "url":  "/app/#/participa/proyecto2"},
		{"name": "Live Resort","size": 10000,"url": "/app/#/participa/proyecto3"}
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 8010},
		{"name": "", "size": 5842},
		{"name": "", "size": 3041},
		{"name": "", "size": 4176},
		{"name": "", "size": 5049}
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{
		 "name": "",
		 "children": [
		  {"name": "", "size": 1721},
		  {"name": "", "size": 1294}
		 ]
		},
		{"name": "", "size": 1759},
		{"name": "", "size": 2165},
		{"name": "", "size": 1772},
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
		{"name": "", "size": 3319},
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