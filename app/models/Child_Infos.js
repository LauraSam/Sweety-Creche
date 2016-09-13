var models = require('../models');

// Chief Model

module.exports = function(sequelize, DataTypes) {

    var ChildInfos = sequelize.define('ChildInfos', {
        id: {
            type: DataTypes.BIGINT,
            field: 'id',
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        classMethods: {
            associate: function(models) {
                // un ChildInfos à plusieurs remarques :
                // ChildInfos.hasMany(models.Remarques);
                ChildInfos.belongsTo(models.Remarks, { foreignKey: 'FK_IdRemarque', constraints: false, targetKey: 'id' });
                ChildInfos.belongsTo(models.InfosDays, { foreignKey: 'FK_IdInfosJour', constraints: false, targetKey: 'id' });
                ChildInfos.belongsTo(models.Allergies, { foreignKey: 'FK_IdAllergy', constraints: false, targetKey: 'id' });
            }
        },
        tableName: 'ChildInfos',
        timestamps: false,
    })
    return ChildInfos;
};
