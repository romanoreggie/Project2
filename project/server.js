var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Askit');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = express();

var port = 3000;

var db = require('./models')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', function(req, res) {
  res.sendFile('views/index.ejs', {
    root: __dirname
  });
});

// app.get('/Posts', function(req, res) {
//   db.Post.find().populate('name')
//     .exec(function(err, posts) {
//       if (err) { return console.log("index error: " + err); }
//       res.json(Posts);
//     });
//   });

// app.get('/api', function api_index (req, res){
//   res.json({
//     message: "Welcome to Ask It!",
//
//     // endpoints: [
//     //   {method: "GET", path: "/api", description: "Describes available endpoints"}
//     // ]
//   });
// });

// app.get('/api/post', function (req, res) {
//   db.Post.find({}, function(err, post){
//   res.json(Post);
// });
// console.log('post index');
// });

// app.get('/api/posts', function (req, res) {
//   // send all books as JSON response
//   db.Post.find(function(err, posts){
//     if (err) {
//       console.log("index error: " + err);
//       res.sendStatus(500);
//     }
//     res.json(posts);
//   });
// });

// let viewData = () => {
// // db.Post.find();
// console.log(db.Post.find());}
//
// viewData();

app.listen(port, () => {
  console.log(`Im listening on ${port}`);
});

module.exports = app;
