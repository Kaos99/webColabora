(function () {
    'use strict';
 
angular
    .module('app')
    .controller('Participa.ActionController', function($scope) {
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
		{"name": "Proyecto 1", "size": 20000,"url":  "https://www.google.com"},
		{"name": "Proyecto 2","size": 20000},
		{"name": "Proyecto 3","size": 10000}
	   ]
	  },
	  {
	   "name": "TRANSPORTE",
	   "children": [
		{"name": "Proyecto 1", "size": 8010},
		{"name": "Proyecto 2", "size": 5842},
		{"name": "Proyecto 3", "size": 3041},
		{"name": "Proyecto 4", "size": 4176},
		{"name": "Proyecto 5", "size": 5049}
	   ]
	  },
	  {
	   "name": "CULTURA Y DEPORTE",
	   "children": [
		{
		 "name": "Proyecto 1",
		 "children": [
		  {"name": "Proyecto 1.1", "size": 1721},
		  {"name": "Proyecto 1.2", "size": 1294}
		 ]
		},
		{"name": "Proyecto 2", "size": 1759},
		{"name": "Proyecto 3", "size": 2165},
		{"name": "Proyecto 4", "size": 1772},
		{"name": "Proyecto 5", "size": 3322}
	   ]
	  },
	  {
	   "name": "SALUD",
	   "children": [
		{"name": "Proyecto 1", "size": 6833},
		{"name": "Proyecto 2", "size": 3732},
		{"name": "Proyecto 3", "size": 3623}
		
	   ]
	  },
	  {
	   "name": "MOVILIDAD",
	   "children": [
		{"name": "Proyecto 1", "size": 9116}
	   ]
	  },
	  {
	   "name": "EDUCACION",
	   "children": [
		{"name": "Proyecto 1", "size": 3082},
		{"name": "Proyecto 2", "size": 3336},
		{"name": "Proyecto 3", "size": 3319},
		{"name": "Proyecto 4", "size": 5498}
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