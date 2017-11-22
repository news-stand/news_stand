import axios from 'axios';

const defaultSources = ['espn'];

const searchArticles = (request, response, next) => {
  let search;

  const { sortBy, selectedSources, topics } = request.query;
  console.log(request.query);
  const sources = selectedSources || defaultSources;

  const formattedSource = sources.join(',').split(' ').join('-');

  if (topics) {
    const formattedTopic = topics.join('%20OR%20').split(' ').join('%20');
    search = `https://newsapi.org/v2/everything?q=${formattedTopic}&sources=${formattedSource}&sortBy=${sortBy}&apiKey=${process.env.NEWS_KEY}`;
  } else {
    search = `https://newsapi.org/v2/everything?sources=${formattedSource}&sortBy=${sortBy}&apiKey=${process.env.NEWS_KEY}`;
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
