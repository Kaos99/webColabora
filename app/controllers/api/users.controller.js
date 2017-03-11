var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');

//routes
router.post('/authenticate', authenticateUser);
router.post('/register', registerUser);
router.get('/current', getCurrentUser);
router.put('/:_id', updateUser);
router.delete('/:_id',deleteUser);

module.exports = router;

function authenticateUser(req, res){
    userService.authenticate(req.body.username, req.ody.password)
        .then(function (token) {
            if (token) {
                //login exito
                res.send({token:token});
            } else {
                res.sendStatus(401);
            }        
    })
    .catch(function (err) {
        res.status(400).send(err);            
    });   
}

function registerUser(req, res) {
    userService.create(req.body)
        .then(function() {
            res.sendStatus(200);
    })
    .catch(function(err){
        res.status(400).send(err);
    });
}

function getCurrentUser(req, res) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if(user) {
                res.send(user);
            }else{
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function updateUser(req, res) {
    var userId = req.user.sub;
    if(req.params._id !== userId) {
        //borrado de cuenta
        return res.status(401).send('You can only update your own account');
    }
    
    userService.update(userId, req.body)
        .then(function (){
            res.sendStatus(200);
    })
    .catch(function (err){
        res.status(400).send(err);
    });
}

function deleteUser(req, res) {
    var userId = req.user.sub;
    if(req.params._id !== userId) {
        //borrado de cuenta
        return res.status(401).send('You can only delete your own account');
    }
    userService.delete(userId)
        .then(function() {
            res.sendStatus(200);        
    })
    .catch(function(err) {
        res.status(400).send(err);
    });
}