const mongoose = require('mongoose');
const Source = require('./models/source');

// mongoDB conenction uri to mlab (remote mongo server)
const uri = `mongodb://${'danny'}:${'danny'}@ds163705.mlab.com:63705/news-stand`;

// connect to mlab db
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', () => {
  console.log('error onc conencting to DB');
});

db.once('open', () => {
  console.log('connection to mongoDb open');
});

module.exports = db;
