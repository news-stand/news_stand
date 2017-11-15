import path from 'path';
import express from 'express';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (request, response) => {
  response.sendFile(indexPath);
});

export default app;
