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
		{
		 "name": "cluster",
		 "children": [
		  {"name": "AgglomerativeCluster", "size": 3938},
		  {"name": "CommunityStructure", "size": 3812},
		  {"name": "HierarchicalCluster", "size": 6714},
		  {"name": "MergeEdge", "size": 743}
		 ]
		},
		{
		 "name": "graph",
		 "children": [
		  {"name": "BetweennessCentrality", "size": 3534},
		  {"name": "LinkDistance", "size": 5731},
		  {"name": "MaxFlowMinCut", "size": 7840},
		  {"name": "ShortestPaths", "size": 5914},
		  {"name": "SpanningTree", "size": 3416}
		 ]
		},
		{
		 "name": "optimization",
		 "children": [
		  {"name": "AspectRatioBanker", "size": 7074}
		 ]
		}
	   ]
	  },
	  {
	   "name": "TRANSPORTE",
	   "children": [
		{"name": "Easing", "size": 15010},
		{"name": "FunctionSequence", "size": 5842},
		{
		 "name": "interpolate",
		 "children": [
		  {"name": "ArrayInterpolator", "size": 1983},
		  {"name": "ColorInterpolator", "size": 2047},
		  {"name": "DateInterpolator", "size": 1375},
		  {"name": "Interpolator", "size": 8746},
		  {"name": "MatrixInterpolator", "size": 2202},
		  {"name": "NumberInterpolator", "size": 1382},
		  {"name": "ObjectInterpolator", "size": 1629},
		  {"name": "PointInterpolator", "size": 1675},
		  {"name": "RectangleInterpolator", "size": 2042}
		 ]
		},
		{"name": "ISchedulable", "size": 1041},
		{"name": "Parallel", "size": 5176},
		{"name": "Pause", "size": 449},
		{"name": "Scheduler", "size": 5593},
		{"name": "Sequence", "size": 5534},
		{"name": "Transition", "size": 9201},
		{"name": "Transitioner", "size": 19975},
		{"name": "TransitionEvent", "size": 1116},
		{"name": "Tween", "size": 6006}
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
		{"name": "RectSprite", "size": 3623},
		{"name": "TextSprite", "size": 10066}
	   ]
	  },
	  {
	   "name": "MOVILIDAD",
	   "children": [
		{"name": "FlareVis", "size": 4116}
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