import path from 'path';
import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import morgan from 'morgan';
import searchArticles from './middleware/bySource';
import authRoutes from './auth-routes';
import passportSetup from './config/passport-setup';
import db from './database/db';
import getSources from './middleware/getSources';
import authenticate from './middleware/authenticate';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');
app.use(morgan('tiny'));
app.use(publicPath);
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY],
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);

app.get('/articles', authenticate, searchArticles, (request, response) => {
  const { articles } = request;
  response.json(articles);
});

app.get('/sources', getSources, (request, response) => {
  response.json(request.sources);
});

app.get('*', (request, response) => {
  response.sendFile(indexPath);
});


export default app;
