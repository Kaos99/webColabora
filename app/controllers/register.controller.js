var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function(req,res){
    res.render('register');
});

router.post('/',function(req,res) {
    //se registra usando la api para mantener limpia la separacion entre capas
    request.post({
        url: config.apiUrl + '/users/register',
        form: req.body,
        json: true
    },function(error,response,body) {
        if(error) {
            return res.render('register',{error:'Un error ocurrió'});
        }
        
        if (response.statusCode !== 200) {
            return res.render('register', {
                error: response.body,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username         
            });
        }
        
        //se vuelve a la pagina de login con un mensaje de exito
        req.session.success = 'Registro correcto';
        return res.redirect('/login');
    });
    
});

module.exports = router;