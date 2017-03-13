var express = require('express');
var router = express.Router();

//aplicamos autentificacion de sesion de usuarios
router.use('/', function(req,res,next) {
    if(req.path !== '/login' && !req.session.token) {
        return res.redirect('/login?returnUrl=' + encodeURIComponent('/app' + req.path));
    }
    next();
});

//disponibilidad del JWT token para la aplicacion de angular
router.get('/token', function(req,res) {
    res.send(req.session.token);
});

//disponilidad de los ficheros de angular en la ruta /app
router.use('/',express.static('app'));

module.exports = router;