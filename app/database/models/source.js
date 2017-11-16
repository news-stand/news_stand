import mongoose, { Schema } from 'mongoose';

const sourceSchema = Schema({
  id: 'String',
  name: 'String',
});

const Source = mongoose.model('users', sourceSchema);

export default Source;
