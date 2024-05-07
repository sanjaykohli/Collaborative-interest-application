const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');


// User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
    college: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  
}, { timestamps: true });




// // Hash the password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Helper method to compare passwords
// userSchema.methods.isValidPassword = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw error;
//   }
// };





module.exports = mongoose.model('User', userSchema);