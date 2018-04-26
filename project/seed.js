const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Post');
const post = require("./models/post.js");
var db = mongoose.connection;


const seedPost = () => {
var Posts = [
  {
    name: "Reggie R.",
    post: "Test, test",
  },
  {
    name: "Reggie R.",
    post: "Test, test",
  }
];

  // Posts.forEach((post) => {
  //   var newPost = post.create(post);
  // });

  console.log("database seeded");
}

seedPost();

setTimeout(function () {
  mongoose.connection.close();
}, 5000);
