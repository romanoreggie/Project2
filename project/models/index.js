var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Askit");
var db = mongoose.connection;

var Post = require("./post.js");
var User = require("./user.js");
var Comment = require("./comment.js")

module.exports.Post = Post;
module.exports.User = User;
module.exports.Comment = Comment;
