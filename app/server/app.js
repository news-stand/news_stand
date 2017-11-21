import path from 'path';
import express from 'express';
import searchArticles from './middleware/bySource';
import router from './router';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/articles', searchArticles, (request, response) => {
  const { articles } = request;
  response.json(articles);
});

app.get('*', (request, response) => {
  response.sendFile(indexPath);
});

export default app;
