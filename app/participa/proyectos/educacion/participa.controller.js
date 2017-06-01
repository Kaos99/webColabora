(function () {
    'use strict';
 
angular
    .module('app')
    .controller('ParticipaEducacion.ActionController', function($scope) {
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
	   "name": "",
	   "children": [
		{"name": "", "size": 8010,"url": ""},
		{"name": "", "size": 5842,"url": ""},
		{"name": "", "size": 5049,"url": ""}
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 1759,"url": ""},
		{"name": "", "size": 2165,"url": ""},
		{"name": "", "size": 3322,"url": ""}
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 9833},
		{"name": "", "size": 3623}
		
	   ]
	  },
	  {
	   "name": "",
	   "children": [
		{"name": "", "size": 9116,"url": ""}
	   ]
	  },
	  {
	   "name": "EDUCACION",
	   "children": [
		{"name": "Educación para el desarrollo sostenible", "size": 3082,"url": "/app/#/participa/proyecto13"},
		{"name": "Alavida: Espacio para crecer", "size": 3336,"url": "/app/#/participa/proyecto14"},
		{"name": "Bosquescuela Cerceda", "size": 5498,"url": "/app/#/participa/proyecto15"}
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