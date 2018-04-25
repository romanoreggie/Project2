var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var commentSchema = new Schema ({
    name: String,
    comment: String,
  });

  var Comment = mongoose.model('Comment', commentSchema);

  module.exports= Comment;
