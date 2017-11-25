import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  googleId: String,
  profileImg: String,
  topics: [String],
  selectedSources: [{}],
  articles: [{}], // for favorites
});

const User = mongoose.model('user', userSchema);

export default User;
