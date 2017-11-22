import mongoose from 'mongoose';


const sourceSchema = mongoose.Schema({
  id: 'String',
  name: 'String',
});

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;
