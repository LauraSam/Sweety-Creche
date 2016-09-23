var models = require('../models');

// Chief Model

module.exports = function(sequelize, DataTypes) {

    var ChildAllergies = sequelize.define('ChildAllergies', {
        id: {
            type: DataTypes.BIGINT,
            field: 'id',
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        classMethods: {
            associate: function(models) {
                // un ChildAllergies à plusieurs remarques :
                // ChildAllergies.hasMany(models.Remarques);
                ChildAllergies.belongsTo(models.Child, { foreignKey: 'FK_IdChild', constraints: false, targetKey: 'id' });
                ChildAllergies.belongsTo(models.Allergies, { foreignKey: 'FK_IdAllergy', constraints: false, targetKey: 'id' });
               /* ChildAllergies.belongsTo(models.Allergies, { foreignKey: 'FK_IdAllergy', constraints: false, targetKey: 'id' });*/
            }
        },
        tableName: 'ChildAllergies',
        timestamps: false,
    })
    return ChildAllergies;
};
