import path from 'path';
import express from 'express';
import searchArticles from './middleware/bySource';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (request, response) => {
  response.sendFile(indexPath);
});

app.get('/articles', searchArticles, (request, response) => {
  response.status(200);

  // sends back an array of articles for a single source
  // not an array of sources
  const { articles } = request;
  response.json(articles);
});

export default app;
