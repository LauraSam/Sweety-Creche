var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function(app) {
    // app.use('/api', router) ==> tell express to include subpath api before any route
  /*  app.use(bodyParser.urlencoded({
        'extended': 'true'
    }));
    app.use(bodyParser.json());*/
    app.use('/', router);
};


