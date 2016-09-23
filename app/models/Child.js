var models = require('../models');

// Chief Model

module.exports = function(sequelize, DataTypes) {

    var Child = sequelize.define('Child', {
        id: {
            type: DataTypes.BIGINT,
            field: 'id',
            primaryKey: true,
            autoIncrement: true
        },
        Firstname: DataTypes.STRING,
        Lastname: DataTypes.STRING,
        Mois: DataTypes.INTEGER
    }, {
        classMethods: {
    
        },
        tableName: 'Children',
        timestamps: false,
    })
    return Child;
};
