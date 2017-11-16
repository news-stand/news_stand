import mongoose from 'mongoose';
// import config from '../config/config';
import Source from './models/source';

// mongoDB conenction uri to mlab (remote mongo server)
const uri = `mongodb://${config.username}:${config.password}@ds163705.mlab.com:63705/news-stand`;

// connect to mlab db
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.log('connection error:'));

db.once('open', () => {
  console.log('connection to mongoDb open');
});

export default db;
