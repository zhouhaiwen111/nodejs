var express = require('express');
var UserService = require("../service/user_service.js");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/login",UserService.login);
router.post("/register",UserService.register);
module.exports = router;
