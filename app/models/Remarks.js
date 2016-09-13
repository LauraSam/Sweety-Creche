var models = require('../models');

// Remarks Model

module.exports = function (sequelize, DataTypes) {

  var Remarks = sequelize.define('Remarks', {
    id: {
      type: DataTypes.BIGINT,
      field: 'id',
      primaryKey: true,
      autoIncrement: true
    },
    Content: DataTypes.STRING
  }, {
    classMethods : {
      associate : function(models){
  
      }
    },
  tableName: 'Remarks',
  timestamps: false,
})
  return Remarks;
};

