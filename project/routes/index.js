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

router.post('/post', function(req, res,) {
  db.Post.create(req.body, function(err) {
    if(err){
      res.send(err);
    } else {
      res.redirect('/');
    };
  });
});

router.delete('/post/:id', function(req, res) {
  db.Post.remove(req.body, function(err){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log("removed post");
      res.redirect('/');
    }
  });
});
//     if(err){
//       res.redirect('/');
//     }else{
//       res.redirect('/');
//     }
//   });
// });
//
// db.Post.remove({}, function(err, posts){
//   if(err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all posts');



module.exports = router;
