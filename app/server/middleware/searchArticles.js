import axios from 'axios';
import moment from 'moment';

const searchArticles = (request, response, next) => {

  const { sortBy, topics, selectedSources } = request.query;

  const beginDate = moment().subtract(3, 'weeks').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');
  let URL = `https://newsapi.org/v2/everything/?from=${beginDate}&to=${endDate}&sortBy=${sortBy}&language=en&apiKey=${process.env.NEWS_KEY}`;

  if (topics) {
    const formattedTopic = topics.join('%20OR%20').split(' ').join('%20');
    URL += `&q=${formattedTopic}`;
  }
  if (selectedSources) {
    const formattedSource = selectedSources.map((source) => {
      return JSON.parse(source).id;
    }).join(',');
    URL += `&sources=${formattedSource}`;
  } else if (!selectedSources && !topics) {
    URL += '&sources=techcrunch';
  }

  // Request information from newsAPI
  axios
    .get(URL)
    .then((newsResponse) => {
      request.articles = newsResponse.data.articles;
    })
    .catch((err) => {
      console.log('error newsAPI: ', err);
    })
    .then(() => next());
};

export default searchArticles;

