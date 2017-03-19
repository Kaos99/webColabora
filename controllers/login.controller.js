var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/',function(req,res) {
    //logout del usuario
    delete req.session.token;
           
    //se mueve el mensaje de exito en variable local para que aparezca una vez (solo lectura)
    var viewData = { success: req.session.success };
    delete req.session.success;
           
    res.render('login',viewData);
});

router.post('/',function(req,res) {
    //autentificar usando api para mantener la separacion entre las capas
    request.post({
        url: config.apiUrl + '/users/authenticate',
        form: req.body,
        json:true
    },function(error,response,body) {
        if(error){
            return res.render('login',{ error:'An error occurred' });
        }
        if(!body.token){
            return res.render('login',{error:'Username or password is incorrect', username:req.body.username});
        }
        
        //se guarda el token JWT en la sesion para hacerlo disponible en la aplicacion de angular
        req.session.token = body.token;
        
        //redirigir hacia returnUrl
        var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
        res.redirect(returnUrl);
    });
});

module.exports = router;