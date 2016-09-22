var express = require('express'),
    router = express.Router();
db = require('../models');

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



/* CREATE the tables ------------- */
router.get('/db/create', function(req, res, next) {
    db.sequelize
        .sync()
        .then(function() {
            res.status(200);
            res.send("Create the tables of the databases. OK")
        }).catch(function(e) {
            // throw new Error(e);
            console.log(e);
        });
});


/* DROP the tables ------------- */
router.get('/db/drop', function(req, res, next) {
    db.sequelize.query(
        "drop schema public cascade; create schema public;"
    ).spread(function(results, metadata) {
        console.log("everything went fine")
    }).catch(function(e) {
        console.log(e);
    })

    res.status(200);
    res.send("Drop the tables of the databases. OK")
});
