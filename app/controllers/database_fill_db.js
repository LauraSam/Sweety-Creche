var express = require('express'),
    router = express.Router(),
    db = require('../models');
   

var models = db.sequelize.models;

module.exports = function(app) {
    // app.use('/api', router) ==> tell express to include subpath api before any route
  /*  app.use(bodyParser.urlencoded({
        'extended': 'true'
    }));
    app.use(bodyParser.json());*/
    app.use('/', router);
};
//Inputs: Array Json

var ChildsArr = [{
    Firstname: "Lilian",
    Lastname: "Lilian",
    Age: 9
}, {
    Firstname: "Lolan",
    Lastname: "Lilian",
    Age: 10
}]

var AllergiesArr = [{
    Libelle: "Allergies aux produits laitiers",
    Reaction: "Erruption cutanée rouges et démengeantes",
}, {
    Libelle: "Allergies au pollen",
    Reaction: "Yeux bouffis"
}]

var RemarksArr = [{
    Content: "RAS",
}, {
    Content: "Mal réveillé et difficulté à manger ce matin",

}]

var InfosDaysArr = [{
    DepartTime: "08:05",
    ArrivalTime: "16:30",
    Date_Day: "18-06-2015"
}, {
    DepartTime: "08:15",
    ArrivalTime: "18:30",
    Date_Day: "18-06-2015"
}]

// FILL ALL -------------
router.get('/db/fill/all', function(req, res, next) {
     console.log("db", db);
    models.Childs.bulkCreate(
        ChildsArr
    );

    models.Allergies.bulkCreate(
        AllergiesArr
    );

    models.Remarks.bulkCreate(
        RemarksArr
    );

    models.InfosDays.bulkCreate(
        RemarksArr
    );


    res.render('database', {
        title: 'Database was fill with dummy datas',
    });
});