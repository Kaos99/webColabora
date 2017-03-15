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

function update(_id, userParam) {
    var deferred = Q.defer();
    
    //validacion
    db.users.findById(_id,function(err,user) {
        if(err) deferred.reject(err);
        
        if (user.username !== userParam.username){
            //username cambia si el nuevo username es tomado antes
            db.users.findOne(
                { username: userParam.username },
                function(err,user){
                    if(err) deferred.reject(err);
                    
                    if(user){
                        //el username ya existe
                        deferred.reject('Username "' +  req.body.username + '" ya esta siendo usado')
                    }else{
                        updateUser();
                    }
                });         
        } else {
            updateUser();
        }
    });
    
    function updateUser(){
        //campos para actualizar
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName
            username: userParam.username,
        };
        
        //actualizar password si fue introducido
        if(userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password,10);
        }
        
        db.users.update(
            { _id: mongo.helper.toObjectID(_id)},
            { $set: set },
            function (err,doc) {
                if(err) deferred.reject(err);
                    deferred.resolve();
            });
    }
    return deferred.promise;
}

//se llama asi a la funcion con subrayado ya que la palabra 'delete' es reservada por javascript
function _delete(_id) {
    var deferred = Q.defer();
    db.users.remove(
    { _id: mongo.helper.toObjectID(_id) },
    function(err) {
        if(err) deferred.reject(err);
            deferred.resolve();
    });
    return deferred.promise;
}