var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var encrypt = require('../../utils/encryption');

// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/

// set up a mongoose model
var UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String
  }
});

UserSchema.pre('save', function(next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    user.salt = encrypt.createSalt();
    user.password = encrypt.hashPwd(user.salt, user.password);
    next();
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(passw, cb) {
  var isMatch = encrypt.hashPwd(this.salt, passw) === this.password;
  cb(null, isMatch);
};

module.exports = mongoose.model('User', UserSchema);
