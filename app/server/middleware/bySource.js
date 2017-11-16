import apiHelper from './search';

const searchArticles = (request, response, next) => {
  // only searches a single source, rather than an
  // array of sources
  // need to see what that request will look like
  // before we can search for multiple sources
  const { source, sortBy, topic } = request.query;

  const search = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_KEY}&source=${source}&sortBy=${sortBy}&q=${topic}`;

  apiHelper(search, (newsData) => {
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
