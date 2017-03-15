var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, {native_parser: true });
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function authenticate(username,password) {
    var deferred = Q.defer();
    
    db.users.findOne({username:username},function(err,user){
        if(err) deferred.reject(err);
        
        if(user && bcrypt.compareSync(password,user.hash)){
            //exito en la autentificacion
            deferred.resolve(jwt.sign({ sub: user._id}, config.secret));
        } else {
            //fracaso en la autentificacion
            deferred.resolve;
        }
        
    });
    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();
    
    db.users.findById(_id,function(err,user) {
        if (err) deferred.reject(err);
        
        if(user) {
            //devuelve user (sin contraseña hash)
            deferred.resolve(_.omit(user,'hash'));
        } else {
            //usuario no encontrado
            deferred.resolve();
        }
    });
    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();
    
    //validacion
    db.users.findOne(
        { username: userParam.username },
        function (err,user){
            if(err) deferred.reject(err);
            
            if(user) {
                //username ya existe
                deferred.reject('Username"'+ userParam.username + '" ya esta siendo usado');
            } else {
                createUser();
            }
        });
 
    function createUser(){
        //establece el objeto de usuario sin limpiar el password
        var user = _.omit(userParam,'password');
        
        //agregar el password hash al objeto usuario
        user.hash = bcrypt.hashSync(userParam.password,10);
        
        db.users.insert(
            user,
            function(err,doc){
               if(err) deferred.reject(err);         
                deferred.resolve();
            });
    }
    return deferred.promise;
}