import mongoose from 'mongoose';

import articleSchema from './article';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  googleId: String,
  profileImg: String,
  topics: [String],
  selectedSources: [{}],
  articles: [articleSchema], // for favorites
});

const User = mongoose.model('user', userSchema);

export default User;
