(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('Account.IndexController', Controller);
    
    function Controller($window, UserService, FlashService) {
        var vm = this;
        
        vm.user = null;
        vm.saveUser = saveUser;
        vm.deleteUser = deleteUser;
        
        initController();
        
        //usuario actual logueado en la aplicacioon
        function initController() {
            UserService.GetCurrent().then(function (user) {
                vm.user = user;   
            });
        }
        
        function saveUser() {
            UserService.Update(vm.user)
                .then(function(){
                FlashService.Success('Datos de usuario actualizado');
                })
                .catch(function (error){
                    FlashService.Error(error);
                });
        }
        
        function deleteUser() {
            UserService.Delete(vm.user._id)
                .then(function(){
                    //logout del usuario
                    $window.location = '/login';
                })
                .catch(function(error){
                    FlashService.Error(error);
                });
        }  
        
    }
    
    
})();