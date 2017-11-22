import path from 'path';
import express from 'express';
import searchArticles from './middleware/bySource';
import getSources from './middleware/getSources';
import morgan from 'morgan';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');
app.use(morgan('tiny'));
app.use(publicPath);

app.get('/articles', searchArticles, (request, response) => {
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
