const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  local: {
  	firstName: String,
  	lastName: String,
    email: String, //login email
    password: String, //unique encrypted password
    role: {required: true, type: String} // Teacher, Sub
  },
  paidCourses: [{type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'}]
});

// user password must ALWAYS be encrypted
// "hash" is a type of algorithym that takes user input of password - creates a randomized string that decrypts later
UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// this compares database password to the one the user entered
UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', UserSchema);
