import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
  userName: 'String',
  message: 'String',
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
