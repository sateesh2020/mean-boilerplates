// grab the packages we need
var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;
var encrypt         = require('../utils/encryption');
// create a schema
var userSchema = new Schema({
  userName: { 
      type: String, 
      required: '{PATH} is required!', 
      index: { 
          unique: true 
      }
  },
  firstName:{ 
      type: String, 
      required: '{PATH} is required!'
  },
  lastName:String,
  email:{ 
      type: String, 
      required: '{PATH} is required!'
  },
  salt:{
      type: String, 
      required: '{PATH} is required!'
  },
  hashPassword:{
      type: String,
      required: '{PATH} is required!'
  },
  assesmentsCompleted:[
      {
          assesmentId:String,
          assesmentName:String
      }
  ],
  assesmentsPending:[
      {
          assesmentId:String,
          assesmentName:String
      }
  ]
});
userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashPassword;
  },
  hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
  }
};
// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);
// make this available to our users in our Node applications
module.exports = User;