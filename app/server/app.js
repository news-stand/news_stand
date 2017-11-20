import path from 'path';
import express from 'express';
import cookieSession from 'cookie-session';
import searchArticles from './middleware/bySource';
import passport from 'passport';
import authRoutes from './auth-routes';
import passportSetup from './config/passport-setup';
import db from './database/db';
import keys from './config/keys';
import getSources from './middleware/getSources';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

app.get('/articles', searchArticles, (request, response) => {
  const { articles } = request;
  response.json(articles);
});

app.get('*', (request, response) => {
  response.sendFile(indexPath);
});

app.get('/sources', getSources, (request, response) => {
  console.log('sources: ', request.sources);
  response.json(request.sources);
});

export default app;
