import axios from 'axios';

const searchArticles = (request, response, next) => {
  let search;

  // if we are only looking for top headlines
  if (request.query.topHeadlines === 'true') {
    const sources = 'espn';
    search = `https://newsapi.org/v2/top-headlines/?sources=${sources}&apiKey=${process.env.NEWS_KEY}`;
  // if we are looking for specific headlines
  } else {
    const { source, sortBy, topic } = request.query;
    search = `https://newsapi.org/v2/everything/?q=${topic}&sources=${source}&sortBy=${sortBy}&&apiKey=${process.env.NEWS_KEY}`;
  }

  // Request information from newsAPI
  axios
    .get(search)
    .then((newsResponse) => {
      request.articles = newsResponse.data.articles;
      console.log(request.articles);
    })
    .catch((err) => {
      console.log('error newsAPI: ', err);
    })
    .then(() => next());
};

export default searchArticles;
