(function () {
    'use strict';
 
    angular
        .module('app', ['ui.router','angular-d3-sunburst','ui.gauge','duScroll'])
        .config(config)
        .run(run)   
 
    
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
            .state('seguimiento/urbanismo', {
                url: "/seguimiento/urbanismo",
                templateUrl: 'seguimiento/urbanismo/seguimiento.urbanismo.html'
            })
            .state('seguimiento/transporte', {
                url: "/seguimiento/transporte",
                templateUrl: 'seguimiento/transporte/seguimiento.transporte.html'
            })
            .state('seguimiento/culdepor', {
                url: "/seguimiento/culdepor",
                templateUrl: 'seguimiento/culdepor/seguimiento.culdepor.html'
            })
            .state('seguimiento/salud', {
                url: "/seguimiento/salud",
                templateUrl: 'seguimiento/salud/seguimiento.salud.html'
            })
            .state('seguimiento/movilidad', {
                url: "/seguimiento/movilidad",
                templateUrl: 'seguimiento/movilidad/seguimiento.movilidad.html'
            })
            .state('seguimiento/educacion', {
                url: "/seguimiento/educacion",
                templateUrl: 'seguimiento/educacion/seguimiento.educacion.html'
            })
        
            .state('decision/proyecto1', {
                url: "/decision/proyecto1",
                templateUrl: 'decisiones/decision.proyecto1.html'
            })
            .state('decision/proyecto2', {
                url: "/decision/proyecto2",
                templateUrl: 'decisiones/decision.proyecto2.html'
            })
            .state('decision/proyecto3', {
                url: "/decision/proyecto3",
                templateUrl: 'decisiones/decision.proyecto3.html'
            })
            .state('decision/proyecto4', {
                url: "/decision/proyecto4",
                templateUrl: 'decisiones/decision.proyecto4.html'
            })
            .state('decision/proyecto5', {
                url: "/decision/proyecto5",
                templateUrl: 'decisiones/decision.proyecto5.html'
            })
            .state('decision/proyecto6', {
                url: "/decision/proyecto6",
                templateUrl: 'decisiones/decision.proyecto6.html'
            })
            .state('decision/proyecto7', {
                url: "/decision/proyecto7",
                templateUrl: 'decisiones/decision.proyecto7.html'
            })
            .state('decision/proyecto8', {
                url: "/decision/proyecto8",
                templateUrl: 'decisiones/decision.proyecto8.html'
            })
            .state('decision/proyecto9', {
                url: "/decision/proyecto9",
                templateUrl: 'decisiones/decision.proyecto9.html'
            })
            .state('decision/proyecto10', {
                url: "/decision/proyecto10",
                templateUrl: 'decisiones/decision.proyecto10.html'
            })
            .state('decision/proyecto11', {
                url: "/decision/proyecto11",
                templateUrl: 'decisiones/decision.proyecto11.html'
            })
            .state('decision/proyecto12', {
                url: "/decision/proyecto12",
                templateUrl: 'decisiones/decision.proyecto12.html'
            })
            .state('decision/proyecto13', {
                url: "/decision/proyecto13",
                templateUrl: 'decisiones/decision.proyecto13.html'
            })
            .state('decision/proyecto14', {
                url: "/decision/proyecto14",
                templateUrl: 'decisiones/decision.proyecto14.html'
            })
            .state('decision/proyecto15', {
                url: "/decision/proyecto15",
                templateUrl: 'decisiones/decision.proyecto15.html'
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
            .state('participa/proyectoUrba1/vota',{
                url: "/participa/proyectoUrba1/vota",
                templateUrl: 'participa/proyectos/urbanismo/proyecto1vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoUrba1/delibera',{
                url: "/participa/proyectoUrba1/delibera",
                templateUrl: 'participa/proyectos/urbanismo/proyecto1delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoUrba2/masinfo',{
                url: "/participa/proyectoUrba2/masinfo",
                templateUrl: 'participa/proyectos/urbanismo/proyecto2info.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoUrba2/vota',{
                url: "/participa/proyectoUrba2/vota",
                templateUrl: 'participa/proyectos/urbanismo/proyecto2vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoUrba2/delibera',{
                url: "/participa/proyectoUrba2/delibera",
                templateUrl: 'participa/proyectos/urbanismo/proyecto2delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoUrba3/masinfo',{
                url: "/participa/proyectoUrba3/masinfo",
                templateUrl: 'participa/proyectos/urbanismo/proyecto3info.html',
                controller: 'ParticipaUrbanismo.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoUrba3/vota',{
                url: "/participa/proyectoUrba3/vota",
                templateUrl: 'participa/proyectos/urbanismo/proyecto3vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoUrba3/delibera',{
                url: "/participa/proyectoUrba3/delibera",
                templateUrl: 'participa/proyectos/urbanismo/proyecto3delibera.html',
                controller: 'GaugeCtrl.ActionController',
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
            .state('participa/proyectoTransporte1/masinfo',{
                url: "/participa/proyectoTransporte1/masinfo",
                templateUrl: 'participa/proyectos/transporte/proyecto1info.html',
                controller: 'ParticipaTransporte.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoTransporte1/vota',{
                url: "/participa/proyectoTransporte1/vota",
                templateUrl: 'participa/proyectos/transporte/proyecto1vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            })
        
            .state('participa/proyectoTransporte1/delibera',{
                url: "/participa/proyectoTransporte1/delibera",
                templateUrl: 'participa/proyectos/transporte/proyecto1delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm' 
            })
        
            .state('participa/proyectoTransporte2/masinfo',{
                url: "/participa/proyectoTransporte2/masinfo",
                templateUrl: 'participa/proyectos/transporte/proyecto2info.html',
                controller: 'ParticipaTransporte.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoTransporte2/vota',{
                url: "/participa/proyectoTransporte2/vota",
                templateUrl: 'participa/proyectos/transporte/proyecto2vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoTransporte2/delibera',{
                url: "/participa/proyectoTransporte2/delibera",
                templateUrl: 'participa/proyectos/transporte/proyecto2delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm' 
            })
        
            .state('participa/proyectoTransporte3/masinfo',{
                url: "/participa/proyectoTransporte3/masinfo",
                templateUrl: 'participa/proyectos/transporte/proyecto3info.html',
                controller: 'ParticipaTransporte.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoTransporte3/vota',{
                url: "/participa/proyectoTransporte3/vota",
                templateUrl: 'participa/proyectos/transporte/proyecto3vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoTransporte3/delibera',{
                url: "/participa/proyectoTransporte3/delibera",
                templateUrl: 'participa/proyectos/transporte/proyecto3delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm' 
            })
        
            .state('participa/proyectoCulDepor1',{
                url: "/participa/proyecto7",
                templateUrl: 'participa/proyectos/culdepor/proyecto7.html',
                controller: 'ParticipaCulDepor.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoCulDepor1/masinfo',{
                url: "/participa/proyectoCulDepor1/masinfo",
                templateUrl: 'participa/proyectos/culdepor/proyecto1info.html',
                controller: 'ParticipaCulDepor.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoCulDepor1/vota',{
                url: "/participa/proyectoCulDepor1/vota",
                templateUrl: 'participa/proyectos/culdepor/proyecto1vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoCulDepor1/delibera',{
                url: "/participa/proyectoCulDepor1/delibera",
                templateUrl: 'participa/proyectos/culdepor/proyecto1delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoCulDepor2',{
                url: "/participa/proyecto8",
                templateUrl: 'participa/proyectos/culdepor/proyecto8.html',
                controller: 'ParticipaCulDepor.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoCulDepor2/masinfo',{
                url: "/participa/proyectoCulDepor2/masinfo",
                templateUrl: 'participa/proyectos/culdepor/proyecto2info.html',
                controller: 'ParticipaCulDepor.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoCulDepor2/vota',{
                url: "/participa/proyectoCulDepor2/vota",
                templateUrl: 'participa/proyectos/culdepor/proyecto2vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoCulDepor2/delibera',{
                url: "/participa/proyectoCulDepor2/delibera",
                templateUrl: 'participa/proyectos/culdepor/proyecto2delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoCulDepor3',{
                url: "/participa/proyecto9",
                templateUrl: 'participa/proyectos/culdepor/proyecto9.html',
                controller: 'ParticipaCulDepor.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoCulDepor3/masinfo',{
                url: "/participa/proyectoCulDepor3/masinfo",
                templateUrl: 'participa/proyectos/culdepor/proyecto3info.html',
                controller: 'ParticipaCulDepor.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoCulDepor3/vota',{
                url: "/participa/proyectoCulDepor3/vota",
                templateUrl: 'participa/proyectos/culdepor/proyecto3vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoCulDepor3/delibera',{
                url: "/participa/proyectoCulDepor3/delibera",
                templateUrl: 'participa/proyectos/culdepor/proyecto3delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoSalud1',{
                url: "/participa/proyecto10",
                templateUrl: 'participa/proyectos/salud/proyecto10.html',
                controller: 'ParticipaSalud.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoSalud1/masinfo',{
                url: "/participa/proyectoSalud1/masinfo",
                templateUrl: 'participa/proyectos/salud/proyecto1info.html',
                controller: 'ParticipaSalud.ActionController',
                controllerAs: 'vm'
            })
            .state('participa/proyectoSalud1/vota',{
                url: "/participa/proyectoSalud1/vota",
                templateUrl: 'participa/proyectos/salud/proyecto1vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('participa/proyectoSalud1/delibera',{
                url: "/participa/proyectoSalud1/delibera",
                templateUrl: 'participa/proyectos/salud/proyecto1delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoSalud2',{
                url: "/participa/proyecto11",
                templateUrl: 'participa/proyectos/salud/proyecto11.html',
                controller: 'ParticipaSalud.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoSalud2/masinfo',{
                url: "/participa/proyectoSalud2/masinfo",
                templateUrl: 'participa/proyectos/salud/proyecto2info.html',
                controller: 'ParticipaSalud.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoSalud2/vota',{
                url: "/participa/proyectoSalud2/vota",
                templateUrl: 'participa/proyectos/salud/proyecto2vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoSalud2/delibera',{
                url: "/participa/proyectoSalud2/delibera",
                templateUrl: 'participa/proyectos/salud/proyecto2delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoMovilidad1',{
                url: "/participa/proyecto12",
                templateUrl: 'participa/proyectos/movilidad/proyecto12.html',
                controller: 'ParticipaMovilidad.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoMovilidad1/masinfo',{
                url: "/participa/proyectoMovilidad1/masinfo",
                templateUrl: 'participa/proyectos/movilidad/proyecto1info.html',
                controller: 'ParticipaMovilidad.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoMovilidad1/vota',{
                url: "/participa/proyectoMovilidad1/vota",
                templateUrl: 'participa/proyectos/movilidad/proyecto1vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoMovilidad1/delibera',{
                url: "/participa/proyectoMovilidad1/delibera",
                templateUrl: 'participa/proyectos/movilidad/proyecto1delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion1',{
                url: "/participa/proyecto13",
                templateUrl: 'participa/proyectos/educacion/proyecto13.html',
                controller: 'ParticipaEducacion.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion1/masinfo',{
                url: "/participa/proyectoEducacion1/masinfo",
                templateUrl: 'participa/proyectos/educacion/proyecto1info.html',
                controller: 'ParticipaEducacion.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion1/vota',{
                url: "/participa/proyectoEducacion1/vota",
                templateUrl: 'participa/proyectos/educacion/proyecto1vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion1/delibera',{
                url: "/participa/proyectoEducacion1/delibera",
                templateUrl: 'participa/proyectos/educacion/proyecto1delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion2',{
                url: "/participa/proyecto14",
                templateUrl: 'participa/proyectos/educacion/proyecto14.html',
                controller: 'ParticipaEducacion.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion2/masinfo',{
                url: "/participa/proyectoEducacion2/masinfo",
                templateUrl: 'participa/proyectos/educacion/proyecto2info.html',
                controller: 'ParticipaEducacion.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion2/vota',{
                url: "/participa/proyectoEducacion2/vota",
                templateUrl: 'participa/proyectos/educacion/proyecto2vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion2/delibera',{
                url: "/participa/proyectoEducacion2/delibera",
                templateUrl: 'participa/proyectos/educacion/proyecto2delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion3',{
                url: "/participa/proyecto15",
                templateUrl: 'participa/proyectos/educacion/proyecto15.html',
                controller: 'ParticipaEducacion.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion3/masinfo',{
                url: "/participa/proyectoEducacion3/masinfo",
                templateUrl: 'participa/proyectos/educacion/proyecto3info.html',
                controller: 'ParticipaEducacion.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion3/vota',{
                url: "/participa/proyectoEducacion3/vota",
                templateUrl: 'participa/proyectos/educacion/proyecto3vota.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/proyectoEducacion3/delibera',{
                url: "/participa/proyectoEducacion3/delibera",
                templateUrl: 'participa/proyectos/educacion/proyecto3delibera.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/favor',{
                url: "/participa/favor",
                templateUrl: 'participa/resultados/votacionOK.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/nodecide',{
                url: "/participa/nodecide",
                templateUrl: 'participa/resultados/votacionOK.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
            .state('participa/encontra',{
                url: "/participa/encontra",
                templateUrl: 'participa/resultados/votacionOK.html',
                controller: 'GaugeCtrl.ActionController',
                controllerAs: 'vm'
            
            })
        
            .state('section-1', {
                url: "/section-1",
                templateUrl: 'footer/footer.html',
                controller: 'section.FooterController',
                controllerAs: 'vm',
            
            })
        
            .state('section-2', {
                url: "/section-2",
                templateUrl: 'footer/footer.html',
                controller: 'section.FooterController',
                controllerAs: 'vm',
            
            })
            .state('section-3', {
                url: "/section-3",
                templateUrl: 'footer/footer.html',
                controller: 'section.FooterController',
                controllerAs: 'vm',
            
            })
            .state('section-4', {
                url: "/section-4",
                templateUrl: 'footer/footer.html',
                controller: 'section.FooterController',
                controllerAs: 'vm',
            
            })
            .state('section-5', {
                url: "/section-5",
                templateUrl: 'footer/footer.html',
                controller: 'section.FooterController',
                controllerAs: 'vm',
            
            })
        
            .state('tecnico/home', {
                url: "/tecnico/home",
                templateUrl: 'tecnico/index.html'
            })
            .state('tecnico/proyecto1', {
                url: "/tecnico/proyecto1",
                templateUrl: 'tecnico/proyecto1.html'
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