"use strict";

var express = require('express'),
    router = express.Router(),
    db = require('../models');
/*path = require('path'),*/
Promise = require("bluebird");

var models = db.sequelize.models;

module.exports = function(app) {
   /* app.use('/api', router)  //==> tell express to include subpath api before any route
    app.use(bodyParser.urlencoded({
        'extended': 'true'
    }));
    app.use(bodyParser.json());*/
    app.use('/', router);
};
//Opening days
router.get('/infosDays', function(req, res, next) {

    models.InfosDays.findAll().then(function(result) {
        res.status(200);
        res.json(result);
    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});


// Opening days with childs
router.get('/infosDays/childs/all', function(req, res, next) {
    models.ChildInfos.findAll(
         {include: [all]}
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


/*// Opening one day with all childs
router.get('/infosDays/childs/all', function(req, res, next) {
    models.ChildInfos.findAll(
    
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
*/