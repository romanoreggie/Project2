var express = require('express');
var router = express.Router();
const db = require("../models/index.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Post.find(function(err, data) {
    if (err) {
      console.log("error with server" + err);
      res.sendStatus(500);
    }
    // res.json(data);
    res.render('index', {
      data: data,
    });
  });
});

router.post('/posts', function(req, res,) {
});


module.exports = router;
