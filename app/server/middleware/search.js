import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const searchArticles = (request, response, next) => {
  // only searches a single source, rather than an
  // array of sources
  // also doesn't allow sortBy filtering yet, as some
  // sources don't support all types of filtering
  const { source } = request.query;

  const search = `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_KEY}&source=${source}`;

  axios.get(search)
    .then((newsResponse) => {
      const articles = newsResponse.data.articles.map((article) => {
        const newArticle = article;
        newArticle.source = source;
        return newArticle;
      });
      request.articles = articles;
      next();
    })
    .catch((err) => {
      console.log(err);
      response.status(500);
      response.end();
    });
};

export default searchArticles;
