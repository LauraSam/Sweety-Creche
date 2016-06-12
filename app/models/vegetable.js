// Example model

module.exports = function (sequelize, DataTypes) {

  var Vegetable = sequelize.define('Vegetable', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id', // Will result in an attribute that is firstName when user facing but first_name in the database
      primaryKey: true
    },
    Name: DataTypes.STRING,
    Ventes: DataTypes.INTEGER,
    Goal: DataTypes.INTEGER
  }, {
  tableName: 'vegetables',
  timestamps: false,
});


  // Vegetable.sync({force: true}).then(function () {
  // // Table created
  // return Vegetable.create({
  //     Id: 50,
  //     Name: 'Tomate',
  //     Ventes: 250,
  //     Goal: 3200
  //   });
  // });

  return Vegetable;
};

