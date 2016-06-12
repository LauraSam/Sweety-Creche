var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/vegetables', function (req, res, next) {
    var allVegs, nbrVegs, sumVentes, sumGoal;

    db.Vegetable.findAndCountAll()
        .then(function (vegetables) {
            allVegs = vegetables.rows;
            nbrVegs = vegetables.count;

            db.Vegetable.sum('Ventes')
                .then(function(sum){
                    sumVentes = sum;

                    db.Vegetable.sum('Goal')
                        .then(function(sum){
                            sumGoal = sum;

                            res.render('index', {
                              title: 'Vegetable',
                              vegetables: allVegs,
                              nbrVegetables: nbrVegs,
                              sumVentes : sumVentes,
                              sumGoal: sumGoal
                            });
                        });
                });
        });

// db.Vegetable.findAndCountAll()
//     .then(function (vegetables) {
//         res.render('index', {
//           title: 'Vegetable',
//           vegetables: vegetables.rows,
//           nbrVegetables: vegetables.count
//         });
//   });


});
