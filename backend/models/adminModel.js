const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

adminSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

adminSchema.pre('save', async function (next) {
  this.password = bcrypt.hash(this.password, 10);
});

adminSchema.methods.getJWTToken = function () {
  return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
    ExpiresIn: process.env.JWT_EXPIRES,
  });
};
module.exports = mongoose.model('Admin', adminSchema);
