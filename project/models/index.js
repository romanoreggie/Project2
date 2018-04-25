var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Post");

module.exports.Post = require("./post.js");
module.exports.User = require("./user.js");
module.exports.Comment = require("./comment.js");
