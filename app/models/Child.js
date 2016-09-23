var models = require('../models');

// Chief Model

module.exports = function(sequelize, DataTypes) {

    var Child = sequelize.define('Childs', {
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
        tableName: 'Children',
        timestamps: false,
    })
    return Child;
};
