var express = require('express'),
    router = express.Router(),
    db = require('../models');

module.exports = function(app) {
    // app.use('/api', router) ==> tell express to include subpath api before any route
    /*app.use(bodyParser.urlencoded({
        'extended': 'true'
    }));
    app.use(bodyParser.json());*/
    app.use('/', router);
};
router.get('/remarks', function(req, res, next) {

    models.Remarks.findAll().then(function(result) {
       res.status(200);
       res.json(result);
    }).catch(function(error) {
        console.log("Les erreurs bloquantes de Sequelize", error);
        res.status(404);
        res.json(error);
    })
    console.log('result');
});



// affichage de tout les models de la db
// console.log("Models in database : ", db.sequelize.models);


// console.log(db.Vegetable.findAll());

// db.Vegetable.create({
//   Name: 'Manioc',
//   Ventes: 56,
//   Goal: 200
// });
