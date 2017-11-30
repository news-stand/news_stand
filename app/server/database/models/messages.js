import mongoose from 'mongoose';

const { Schema } = mongoose;

const messagesSchema = new Schema({
  articleTitle: String,
  messages: [],
});

const Messages = mongoose.model('Messages', messagesSchema);

export default Messages;
