import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  googleId: String,
});

const User = mongoose.model('user', userSchema);

export default User;
