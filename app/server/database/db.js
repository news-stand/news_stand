import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Source from './models/source';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', (error) => {
  console.log('connection error : ', error);
});

db.once('open', () => {
  console.log('connection to mongoDb open');
});

export default db;
