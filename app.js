var express = require('express'),
    config = require('./config/config'),
    path = require('path');
    db = require('./app/models'),
    bodyParser = require('body-parser'),
    cors = require('cors');
var app = express();

require('./config/express')(app, config);

app.use(cors());

db.sequelize
    .sync()
    .then(function() {
        app.listen(config.port, function() {
            console.log('Express server listening on port ' + config.port);
        });
    }).catch(function(e) {
        throw new Error(e);
    });

