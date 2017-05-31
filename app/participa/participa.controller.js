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
		{"name": "El Cañaveral", "size": 20000,"url": "/app/#/participa/proyecto1"},
		{"name": "La Peineta","size": 20000,"url": "/app/#/participa/proyecto2"},
		{"name": "Live Resort","size": 10000,"url": "/app/#/participa/proyecto3"}
	   ]
	  },
	  {
	   "name": "TRANSPORTE",
	   "children": [
		{"name": "Tren Moncloa-Majadahonda", "size": 8010,"url": "/app/#/participa/proyecto4"},
		{"name": "Metro a El Casar", "size": 5842,"url": "/app/#/participa/proyecto5"},
		{"name": "Líneas de Bus Expres", "size": 5049,"url": "/app/#/participa/proyecto6"}
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
	   "name": "SALUD",
	   "children": [
		{"name": "Madrid sin exclusión social", "size": 9833,"url": "/app/#/participa/proyecto10"},
		{"name": "Centro de salud de Valdemoro", "size": 3623,"url": "/app/#/participa/proyecto11"}
		
	   ]
	  },
	  {
	   "name": "MOVILIDAD",
	   "children": [
		{"name": "Proyecto 1", "size": 9116,"url": "/app/#/participa/proyecto12"}
	   ]
	  },
	  {
	   "name": "EDUCACION",
	   "children": [
		{"name": "Proyecto 1", "size": 3082},
		{"name": "Proyecto 2", "size": 3336},
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