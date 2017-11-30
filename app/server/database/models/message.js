import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  userName: 'String',
  message: 'String',
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
