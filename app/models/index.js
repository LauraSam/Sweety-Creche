var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    config = require('../../config/config'),
    db = {};

var sequelize = new Sequelize(config.db);

/* Establish a connection to the database, 
grab all the model files from the correct folder, 
add them to the db object
apply any relations between each model (if any defined)*/
/*var folderDWh = __dirname + "/datawarehouse";*/
fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
