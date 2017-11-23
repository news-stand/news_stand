import axios from 'axios';

const searchArticles = (request, response, next) => {
  let search;

  const { sortBy, topics } = request.query;
  let { selectedSources } = request.query;

  const defaultSource = {
    label: 'TechCrunch',
    id: 'techcrunch',
  };

  selectedSources = selectedSources || [JSON.stringify(defaultSource)];

  const formattedSource = selectedSources.map(source => JSON.parse(source).id).join(',');

  if (topics) {
    const formattedTopic = topics.join('%20OR%20').split(' ').join('%20');
    search = `https://newsapi.org/v2/everything?q=${formattedTopic}&sources=${formattedSource}&sortBy=${sortBy}&apiKey=${process.env.NEWS_KEY}`;
    console.log(search);
  } else {
    search = `https://newsapi.org/v2/everything?sources=${formattedSource}&sortBy=${sortBy}&apiKey=${process.env.NEWS_KEY}`;
    console.log(search);
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
