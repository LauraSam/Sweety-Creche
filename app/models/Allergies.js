var models = require('../models');

// Chief Model

module.exports = function (sequelize, DataTypes) {

  var Allergies = sequelize.define('Allergies', {
    id: {
      type: DataTypes.BIGINT,
      field: 'id',
      primaryKey: true,
      autoIncrement: true
    },
    Libelle: DataTypes.STRING,
    Reaction: DataTypes.STRING
  }, {
    classMethods : {
      associate : function(models){
        // un Allergies à plusieurs remarques :
        // Allergies.hasMany(models.Remarques);
      
          /*Allergies.belongsTo(models.InfosJour, { foreignKey: 'FK_InfosJour', constraints: false, targetKey: 'IdInfosJour' });*/
      }
    },
  tableName: 'Allergies',
  timestamps: false,
}
)
  return Allergies;
};