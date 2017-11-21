import mongoose from 'mongoose';
import Source from './models/source';
import keys from '../../config/keys';

// connect to mlab db
mongoose.connect(keys.mongodb.URI);

const db = mongoose.connection;

db.on('error', console.log('connection error:'));

db.once('open', () => {
  console.log('connection to mongoDb open');
});

export default db;
