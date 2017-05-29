(function () {
    'use strict';
 
    angular
        .module('app', ['ui.router','angular-d3-sunburst'])
        .config(config)
        .run(run);
 
    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");
 
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/index.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'home' }
            })
            .state('account', {
                url: '/account',
                templateUrl: 'account/index.html',
                controller: 'Account.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'account' }
            })
            .state('participa', {
                url: "/participa",
                templateUrl: 'participa/participa.html',
                controller: 'Participa.ActionController',
                controllerAs: 'vm',
                data: { activeTab: 'participa'}
            
            })
            .state('decisiones', {
                url: "/decisiones",
                templateUrl: 'decisiones/decisiones.html'
            })
            .state('seguimiento', {
                url: "/seguimiento",
                templateUrl: 'seguimiento/seguimiento.html'
            })
        
            .state('participa/proyectoUrba1', {
                url: "/participa/proyecto1",
                templateUrl: 'participa/proyectos/urbanismo/proyecto1.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            })
            
            .state('participa/proyectoUrba2', {
                url: "/participa/proyecto2",
                templateUrl: 'participa/proyectos/urbanismo/proyecto2.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            })
            .state('participa/proyectoUrba3', {
                url: "/participa/proyecto3",
                templateUrl: 'participa/proyectos/urbanismo/proyecto3.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            })
            .state('participa/proyectoUrba1/masinfo',{
                url: "/participa/proyectoUrba1/masinfo",
                templateUrl: 'participa/proyectos/urbanismo/proyecto1info.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoUrba2/masinfo',{
                url: "/participa/proyectoUrba2/masinfo",
                templateUrl: 'participa/proyectos/urbanismo/proyecto2info.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoUrba3/masinfo',{
                url: "/participa/proyectoUrba3/masinfo",
                templateUrl: 'participa/proyectos/urbanismo/proyecto3info.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoTransporte1',{
                url: "/participa/proyecto4",
                templateUrl: 'participa/proyectos/transporte/proyecto4.html',
                controller: 'ParticipaTransporte.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoTransporte2',{
                url: "/participa/proyecto5",
                templateUrl: 'participa/proyectos/transporte/proyecto5.html',
                controller: 'ParticipaTransporte.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoTransporte3',{
                url: "/participa/proyecto6",
                templateUrl: 'participa/proyectos/transporte/proyecto6.html',
                controller: 'ParticipaTransporte.ActionController',
                controllerAs: 'vm'
            
            })
            ;
    }
 
    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;
 
        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });
    }
 
    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;
 
            angular.bootstrap(document, ['app']);
        });
    });
})();