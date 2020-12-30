const { Schema } = mongoose;

const usersSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId,
  },
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
