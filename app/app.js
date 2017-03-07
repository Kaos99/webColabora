(function () {
	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(config)
		.run(run);

	function config($stateProvider, $urlRouterProvider) {
		//definimos la ruta por defecto
		$urlRouterProvider.otherwise("/");

		$stateProvider
			//estado para la pagina de inicio del usuario
			.state('home', {
				url: '/',
				templateUrl: 'home/index.html',
				controller: 'Home.IndexController',
				controllerAs: 'vm',
                data: { activeTab: 'home'}

			})

			//estado para la pagina de la cuenta del usuario
			.state('account', {
				url: '/account',
				templateUrl: 'account/index.html',
				controller: 'Account.IndexController',
				controllerAs: 'vm',
                data: { activeTab: 'account'}

			});
	}

	function run($http, $rootScope ,$window) {
        //agregamos como cabecera de autorizacion el token JWT
        $http.defaults.headers.common['Authorization'] = 'Portador' + '$window.jwtToken';
        
        //actualizacion del estado en la barra de usuario
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		  $rootScope.activeTab = toState.data.activeTab;
        });
	}
    
    //activacion manual de angular boostrap desde que el token haya sido recibido desde el servidor
    $(function() {
        //se obtiene el token JWT desde el servidor
        $.get('/app/token', function(token){
            window.jwtToken = token;
            angular.bootstrap(document, ['app']);
            
        });     
             
    });
        
})();