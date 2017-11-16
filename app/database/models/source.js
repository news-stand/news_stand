import mongoose, { Schema } from 'mongoose';

const sourceSchema = Schema({
  id: 'String',
  name: 'String',
});

const Source = mongoose.model('Source', sourceSchema);

export default Source;
