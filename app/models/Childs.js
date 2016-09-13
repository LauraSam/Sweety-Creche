var models = require('../models');

// Chief Model

module.exports = function(sequelize, DataTypes) {

    var Childs = sequelize.define('Childs', {
        id: {
            type: DataTypes.BIGINT,
            field: 'id',
            primaryKey: true,
            autoIncrement: true
        },
        Firstname: DataTypes.STRING,
        Lastname: DataTypes.STRING,
        Age: DataTypes.INTEGER
    }, {
        classMethods: {
    
        },
        tableName: 'Childs',
        timestamps: false,
    })
    return Childs;
};
