var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var postSchema = new Schema ({
    name: String,
    post: String,
  });

  var Post = mongoose.model('Post', postSchema);

  module.exports= Post;
