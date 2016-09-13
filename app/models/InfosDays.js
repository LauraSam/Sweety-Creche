var models = require('../models');

// InfosDays Model

module.exports = function(sequelize, DataTypes) {

    var InfosDays = sequelize.define('InfosDays', {
            id: {
                type: DataTypes.BIGINT,
                field: 'id',
                primaryKey: true,
                autoIncrement: true
            },
            DepartTime: DataTypes.TIME,
            ArrivalTime: DataTypes.TIME,
            Date_Day: DataTypes.DATE
        }, {
            classMethods: {
                associate: function(models) {
                    // un veg appartient à plusieurs plats :
                    /*InfosDays.belongsTo(models. }); // creation d'un model DishIngredients*/
                }
            },
            tableName: 'InfosDays',
            timestamps: false,
        }


    )
    return InfosDays;
};




/* This will add methods getDishes, setDishes, addDish, addDishes to Vegetable */




// affichage de tout les models de la db
// console.log("Models in database : ", db.sequelize.models);

// var firstVeggie = db.Vegetable.findOne();
// console.log("firstVeggie", firstVeggie.get(
//   {
//     plain: true
//   }));

// db.Vegetable.create({
//   Name: 'Manioc',
//   Ventes: 56,
//   Goal: 200
// });


//Create instance of a model but not stored yet in the database
// var newVeggie = db.Vegetable.build({
//   Name: "Betterave vertes",
//   Ventes: 7,
//   Goal: 50
// })

// newVeggie.save().then(function(){
//   console.log("the veggie was saved ! ");
// })

// newVeggie.update({
//   Name : "Loupiotte"
// })

// // newVeggie.save().then(function(){
// //   console.log("veggie update");
// // })

// newVeggie.destroy({force: true})

// // console.log(newVeggie);