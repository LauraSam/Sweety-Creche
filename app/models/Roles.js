var models = require('../models');

// Role Model

module.exports = function(sequelize, DataTypes) {

    var Roles = sequelize.define('Roles', {
            id: {
                type: DataTypes.BIGINT,
                field: 'id',
                primaryKey: true,
                autoIncrement: true
            },
            Role: DataTypes.INTEGER,
            Libelle: DataTypes.STRING
           
        }, {
            classMethods: {
                associate: function(models) {
        
                   
                }
            },
            tableName: 'Roles',
            timestamps: true,
        }


    )
    return Roles;
};

