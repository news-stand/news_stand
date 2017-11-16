import path from 'path';
import express from 'express';
import searchArticles from './middleware/search';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (request, response) => {
  response.sendFile(indexPath);
});

app.get('/articles', searchArticles, (request, response) => {
  response.status(200);

  const { articles } = request;
  response.end(JSON.stringify(articles));
});

export default app;
