const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/Askit');
const db = require("./models");
// var db = mongoose.connection;


var Posts = [
  {
    name: "Reggie R.",
    post: "Test, test",
  },

  {
    name: "Scott",
    post: "no idea wtf Im doing",
  },
  {
    name: "No idea",
    post: "Trying here...",
  },
  {
    name: "Uhh",
    post: "okay then..",
  },
  {
    name: "Chris",
    post: "What am I doing here?",
  }
];
  // Posts.forEach((post) => {
  //   var newPost = post.create(post);
  // });



// setTimeout(function() {
//   mongoose.connection.close();
// }, 5000);

// remove all records that match {} -- which means remove ALL records


db.Post.remove({}, function(err, posts){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all posts');

    // create new records based on the array books_list
    db.Post.create(Posts, function(err, posts){
      if (err) { return console.log('err', err); }
      console.log("created", posts.length, "posts");
      process.exit();
    });
  }
});
