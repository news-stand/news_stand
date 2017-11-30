import path from 'path';
import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import BodyParser from 'body-parser';
import morgan from 'morgan';

import searchArticles from './middleware/searchArticles';
import authRoutes from './auth-routes';
import passportSetup from './config/passport-setup'; // not used, but needs to be required to run file
import db from './database/db'; // not used, but gets DB up and running
import getSources from './middleware/getSources';
import getPreferences from './middleware/getPreferences';
import setPreferences from './middleware/setPreferences';
import addFavorite from './middleware/addFavorite';
import addMessage from './middleware/addMessage';
import grabMessage from './middleware/grabMessages';


const app = express();
const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(morgan('tiny'));
app.use(publicPath);

// ---- ORDER OF PASSPORT MIDDLEWARE IS IMPORTANT ---- //
// sets up both cookie expiration (1 day) and key for encrypting googleId into a cookie
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY],
}));

// gets passport running (not really sure beyond that)
app.use(passport.initialize());
app.use(passport.session());

// set up routes from  auth-routes.js
app.use('/auth', authRoutes);

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/articles', searchArticles, (request, response) => {
  const { articles } = request;
  response.json(articles);
});

app.get('/sources', getSources, (request, response) => {
  response.json(request.sources);
});

app.get('/preferences', getPreferences, searchArticles, (request, response) => {
  const { articles, preferences } = request;
  response.json({ articles, preferences });
});

app.post('/preferences', setPreferences, (request, response) => {
  response.end('Posted successfully');
});

app.post('/favorites', addFavorite, (request, response) => {
  if (request.user) {
    response.status(201).end('favorite added');
  } else {
    response.status(200).end('please log in before adding to favorites');
  }
});

app.post('/message', addMessage);
app.post('/messages', grabMessage);

// catch-all route for implementing React Router
app.get('*', (request, response) => {
  response.sendFile(indexPath);
});


export default app;
