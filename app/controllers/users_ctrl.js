"use strict";

var express = require('express'),
    router = express.Router(),
    db = require('../models');
/*path = require('path'),*/
    Promise = require("bluebird");



var models = db.sequelize.models;

module.exports = function(app) {
    // app.use('/api', router) ==> tell express to include subpath api before any route
   /* app.use(bodyParser.urlencoded({
        'extended': 'true'
    }));
    app.use(bodyParser.json());*/
    app.use('/', router);
};

//Get All users
router.get('/users', function(req, res, next) {

    models.Users.findAll().then(function(result) {
       res.status(200);
       res.json(result);
    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});


//Get one user with id
router.get('/user/:id', function(req, res, next) {
      var id = req.params.id;
      models.Users.findAll(
       {where : {id : id} } 
    ).then(function(result) {
       res.status(200);
       res.json(result);
    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});


//Get All users with id
router.get('/users/:idRole', function(req, res, next) {
      var idRole = req.params.id;
      models.Users.findAll(
      {where : {FK_IdRole : idRole} }  
    ).then(function(result) {
       res.status(200);
       res.json(result);
    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});

