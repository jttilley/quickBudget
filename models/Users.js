const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const usersSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  admin: {
    type: Boolean,
    unique: false,
    required: true,
    default: false,
  },
  budgets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Budgets"
    }
  ]
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

usersSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

usersSchema.methods.validPassword = (password, encrypted) => {
  return bcrypt.compareSync(password, encrypted);
};

const User = mongoose.model('User', usersSchema);

module.exports = User;