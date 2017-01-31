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
				url: '/'
				templateUrl: 'home/index.html',
				controller: ''

			})

			//estado para la pagina de la cuenta del usuario
			.state('useraccount',{

			});
	}


})();