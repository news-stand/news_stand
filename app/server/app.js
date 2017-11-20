import path from 'path';
import express from 'express';
import searchArticles from './middleware/bySource';
import getSources from './middleware/getSources';

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

app.get('/sources', getSources, (request, response) => {
  console.log('sources: ', request.sources);
  response.json(request.sources);
});

export default app;
