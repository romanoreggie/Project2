var express = require('express');
var router = express.Router();
const db = require("../models/index.js");

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.sendFile('views/login.ejs', {
    root: __dirname
});
});

module.exports = router;
