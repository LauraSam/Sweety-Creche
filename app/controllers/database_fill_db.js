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
    app.use(cors());

    app.use('/', router);
};

// CORS ----------------------
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var convertToDateFromSimpleString = function(dateValue) { // simple string = yyyymmdd
    var dateValueV = String(dateValue);
    var yyyy = dateValueV.substr(0, 4);
    var mm = dateValueV.substr(4, 2);
    var dd = dateValueV.substr(6, 2);
    var dateFormated = yyyy + '-' + mm + '-' + dd;
    /*    console.log("dateFormated =====>", dateFormated);*/
    return dateFormated;
}


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
    Reaction: "Erruptions cutanées rouges et démengeantes",
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
    ArrivalTime: "08:15",
    DepartTime: "18:15",
    Date_Day: "2015-08-15"
}, {
    ArrivalTime: "07:35",
    DepartTime: "18:15",
    Date_Day: "2015-07-15"
}, {
    ArrivalTime: "08:15",
    DepartTime: "16:15",
    Date_Day: "2015-08-19"
}, {
    ArrivalTime: "07:35",
    DepartTime: "18:15",
    Date_Day: "2015-07-20"
}]

var ChildAllergiesArr = [{
    FK_IdChild: 1,
    FK_IdAllergy: 2,
}, {
    FK_IdChild: 2,
    FK_IdAllergy: 1,
}, {
    FK_IdChild: 1,
    FK_IdAllergy: 1,
}]

var ChildsInfosArr = [{
    FK_IdChild: 1,
    FK_IdRemarque: 1,
    FK_IdInfosJour: 1,
}, {
    FK_IdChild: 2,
    FK_IdRemarque: 1,
    FK_IdInfosJour: 2,
}, {
    FK_IdChild: 1,
    FK_IdRemarque: 2,
    FK_IdInfosJour: 2,
}]


// FILL ALL -------------
router.get('/db/fill/all', function(req, res, next) {
    /*     console.log("db", db);*/

      models.Child.bulkCreate(
        ChildsArr
    );

    models.InfosDays.bulkCreate(
        InfosDaysArr
    );

      models.Allergies.bulkCreate(
        AllergiesArr
    );

    models.Remarks.bulkCreate(
        RemarksArr
    );

    models.ChildInfos.bulkCreate(
        ChildsInfosArr
    );

    models.ChildAllergies.bulkCreate(
        ChildAllergiesArr
    );

    console.log('Fill the DB', "DB filled");
    res.status(200);
    res.render('database', {
        title: 'Database was fill with dummy datas'
    });
});
