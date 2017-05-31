(function () {
    'use strict';
 
angular
    .module('app')
    .controller('ParticipaCulDepor.ActionController', function($scope) {
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
	   "name": "CULTURA Y DEPORTE",
	   "children": [
		{"name": "Patios Escolares", "size": 1759,"url": "/app/#/participa/proyecto7"},
		{"name": "América en España: los lazos comunes", "size": 2165,"url": "/app/#/participa/proyecto8"},
		{"name": "Madrid se Mueve", "size": 3322,"url": "/app/#/participa/proyecto9"}
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