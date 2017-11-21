import path from 'path';
import express from 'express';
import searchArticles from './middleware/bySource';
import authRoutes from './auth-routes';
import passportSetup from './config/passport-setup';
import db from './database/db';
import cookieSession from 'cookie-session';
import passport from 'passport';
import keys from './config/keys';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);
app.use('/auth', authRoutes);

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/articles', searchArticles, (request, response) => {
  const { articles } = request;
  response.json(articles);
});

app.get('*', (request, response) => {
  response.sendFile(indexPath);
});

export default app;
