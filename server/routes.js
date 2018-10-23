// routes.js

var express = require("express");
const bp = require('body-parser');
const controller = require('./controller');

module.exports = function(app) {

    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + "/static"));
    app.use(bp.urlencoded({extended:true}));
    app.use(bp.json());

    app.get('/allpet',                  controller.allPet);
    app.get('/onepet/:id',              controller.onePet);
    app.post('/newpet',                 controller.newPet);
    app.post('/uppet/:id',              controller.upPet);
    app.get('/delpet/:id',              controller.delPet);
    app.get('/allpetsorted',            controller.allPetSorted);

    return app;
}

