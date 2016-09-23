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
      }
    },
  tableName: 'Allergies',
  timestamps: false,
}
)
  return Allergies;
};