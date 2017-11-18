import path from 'path';
import express from 'express';
import searchArticles from './middleware/bySource';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/articles', searchArticles, (req, res) => {
  const { articles } = req;
  res.json(articles);
});

export default app;
