require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

//se usa JWT authentificacion para la seguridad del api
app.use('/api',expressJwt({ secret: config.secret }).unless({path: ['/api/users/authenticate','api/users/register']}));

//routes
app.use('/login',require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'))

//hacer /app la ruta por defecto
app.get('/',function(req,res) {
    return res.redirect('app');
});

//se inicia el servidor
var server = app.listen(3000,function(){
    console.log('Servidor atendiendo en http://' + server.address().address + ':' + server.address().port);
});