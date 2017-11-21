import axios from 'axios';

const searchArticles = (request, response, next) => {
  let search;

  // if we are only looking for top headlines
  if (request.query.topHeadlines === 'true') {
    const sources = 'espn';
    search = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${process.env.NEWS_KEY}`;
  // if we are looking for specific headlines
  } else {
    const { source, sortBy, topic } = request.query;

    // format source and topic for url-encoding
    // switch spaces on source to '-', since we don't have source codes yet
    // encode all other spaces as '%20'
    const formattedSource = source.join(',').split(' ').join('-');
    const formattedTopic = topic.join('%20OR%20').split(' ').join('%20');
    search = `https://newsapi.org/v2/everything?q=${formattedTopic}&sources=${formattedSource}&sortBy=${sortBy}&apiKey=${process.env.NEWS_KEY}`;
  }

  // Request information from newsAPI
  axios
    .get(search)
    .then((newsResponse) => {
      request.articles = newsResponse.data.articles;
    })
    .catch((err) => {
      console.log('error newsAPI: ', err);
    })
    .then(() => next());
};

export default searchArticles;
