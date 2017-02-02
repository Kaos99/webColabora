(function () {
	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(config)
		.run(run);

	function config($stateProvider, $urlRouterProvider) {
		//definimos la ruta por defecto
		$urlRouterProvider.otherwise("/");

		stateProvider
			//estado para la pagina de inicio del usuario
			.state('home', {
				url: '/',
				templateUrl: 'home/index.html',
				controller: '',
				controllerAs:

			})

			//estado para la pagina de la cuenta del usuario
			.state('useraccount', {
				url: '/useraccount',
				templateUrl: 'useraccount/index.html',
				controller: '',
				controllerAs: ''

			});
	}

	function run($http, $window) {
		
	}


})();