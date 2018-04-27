var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var userSchema = new Schema ({
    _id: String,
    name: String,
  });

  var User = mongoose.model('User', userSchema);

  module.exports= User;
