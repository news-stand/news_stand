import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getArticles = (baseSearch, sortBy, successCallback, failureCallback) => {
  axios.get(`${baseSearch}&sortBy=${sortBy}`)
    .then((newsResponse) => {
      successCallback(newsResponse.data);
    })
    .catch((err) => {
      failureCallback(err);
    });
};

const searchArticles = (request, response, next) => {
  // only searches a single source, rather than an
  // array of sources
  const { source, sortBy } = request.query;
  console.log(sortBy);

  const search = `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_KEY}&source=${source}`;

  getArticles(search, sortBy, (newsData) => {
    const articles = newsData.articles.map((article) => {
      const newArticle = article;
      newArticle.source = source;
      return newArticle;
    });
    request.articles = articles;
    next();
  }, (err) => {
    console.log(err);
    response.status(500).send('Error--request can\'t be processed.');
  });
};

export default searchArticles;
