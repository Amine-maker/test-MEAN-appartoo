var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const auth = require('../middleware/auth');


module.exports = app => {
    const schtrompf = require("../controllers/schtrompf.controller.js");
  
    var router = require("express").Router();
    app.use('/api/schtrompf', jsonParser, router);

    router.post("/register", schtrompf.create);
    router.get("/all",/*auth,*/ schtrompf.findAll);
    router.get("/:id",/*auth,*/ schtrompf.findOne);
    router.post("/update/:id", /*auth,*/ schtrompf.update);
    router.post("/addOneSchtrompfTo/:id"/*,auth*/,schtrompf.addSchtrompfOnList);
    router.post("/removeOneSchtrompfFrom/:id",/* auth,*/ schtrompf.removeFromSchtrompList);
    router.get('/findFriendList/:id',/*auth,*/ schtrompf.findFriendList);
    router.post('/login', schtrompf.login);
    router.get('/auth/logout',/*auth,*/ schtrompf.logout);
  
  };