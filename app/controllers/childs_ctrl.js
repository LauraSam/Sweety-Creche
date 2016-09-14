"use strict";

var express = require('express'),
    router = express.Router(),
    db = require('./../models');
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

//get All childs
router.get('/childs', function(req, res, next) {
        var allChilds, nbrChilds;
    models.Childs.findAndCountAll().then(function(childs) {
       res.status(200);
       /*res.json(result);*/
       allChilds = childs.rows;
       nbrChilds = childs.count;
       res.status(200);
       res.render('childs', {
           title: 'List of all the childs',
           childs: allChilds,
           nbrChilds: nbrChilds,
       });

    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});


//get All childs with allergies
router.get('/childs/allergies', function(req, res, next) {

    models.Childs.findAll().then(function(result) {
       res.status(200);
        res.render('childs', {
           title: 'List of all the childs with allergies',
           childs: allChilds,
           nbrChilds: nbrChilds,
           allergies: allergies,
       });

    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});

