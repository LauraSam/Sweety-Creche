"use strict";

var express = require('express'),
    router = express.Router(),
    db = require('./../models');
/*path = require('path'),*/
Promise = require("bluebird");



var models = db.sequelize.models;

module.exports = function(app) {
    // app.use('/api', router) ==> tell express to include subpath api before any route
  /*  app.use(bodyParser.urlencoded({
        'extended': 'true'
    }));
    app.use(bodyParser.json());*/
    app.use(cors());

    app.use('/', router);
};

// CORS ----------------------
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Get All allergies
router.get('/allergies', function(req, res, next) {
    models.Allergies.findAll().then(function(result) {
        res.status(200);
        res.json(result);
    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});


// Get One allergie with id
router.get('/allergy/:id', function(req, res, next) {
    var id = req.params.id;
    models.Allergies.findAll(
     {where : {id : id}}
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
