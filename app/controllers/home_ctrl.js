var express = require('express'),
    router = express.Router(),
    db = require('../models');

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


//Home page
router.get('/index', function(req, res, next) {
    res.status(200);
    res.render('index', {
        title: 'the application of SWEETY CRECHE',
    });

})
