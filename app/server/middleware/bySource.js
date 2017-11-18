import axios from 'axios';

const searchArticles = (req, res, next) => {
  let search;

  // if we are only looking for top headlines
  if (req.query.topHeadlines === 'true') {
    const sources = 'espn';
    search = `https://newsapi.org/v2/top-headlines/?sources=${sources}&apiKey=${process.env.NEWS_KEY}`;
  // if we are looking for specific headlines
  } else {
    const { source, sortBy, topic } = req.query;
    search = `https://newsapi.org/v2/everything/?q=${topic}&sources=${source}&sortBy=${sortBy}&&apiKey=${process.env.NEWS_KEY}`;
  }

  // Request information from newsAPI
  axios
    .get(search)
    .then((newsResponse) => {
      req.articles = newsResponse.data.articles;
      console.log(req.articles);
    })
    .catch((err) => {
      console.log('didn\'t get a response form newsAPI');
    })
    .then(() => next());
};

export default searchArticles;
