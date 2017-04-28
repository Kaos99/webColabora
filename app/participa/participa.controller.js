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
		{"name": "Proyecto 1", "size": 20000},
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
		 "name": "converters",
		 "children": [
		  {"name": "Converters", "size": 721},
		  {"name": "DelimitedTextConverter", "size": 4294},
		  {"name": "GraphMLConverter", "size": 9800},
		  {"name": "IDataConverter", "size": 1314},
		  {"name": "JSONConverter", "size": 2220}
		 ]
		},
		{"name": "DataField", "size": 1759},
		{"name": "DataSchema", "size": 2165},
		{"name": "DataSet", "size": 586},
		{"name": "DataSource", "size": 3331},
		{"name": "DataTable", "size": 772},
		{"name": "DataUtil", "size": 3322}
	   ]
	  },
	  {
	   "name": "SALUD",
	   "children": [
		{"name": "DirtySprite", "size": 8833},
		{"name": "LineSprite", "size": 1732},
		{"name": "RectSprite", "size": 3623}
		
	   ]
	  },
	  {
	   "name": "MOVILIDAD",
	   "children": [
		{"name": "FlareVis", "size": 9116}
	   ]
	  },
	  {
	   "name": "EDUCACION",
	   "children": [
		{"name": "DragForce", "size": 1082},
		{"name": "GravityForce", "size": 1336},
		{"name": "IForce", "size": 319},
		{"name": "NBodyForce", "size": 10498},
		{"name": "Particle", "size": 2822},
		{"name": "Simulation", "size": 9983},
		{"name": "Spring", "size": 2213},
		{"name": "SpringForce", "size": 1681}
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