import getArticles from './search';

const searchBySource = (request, response, next) => {
  // only searches a single source, rather than an
  // array of sources
  const { source, sortBy } = request.query;

  const search = `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_KEY}&source=${source}&sortBy=${sortBy}`;

  getArticles(search, (newsData) => {
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

export default searchBySource;
