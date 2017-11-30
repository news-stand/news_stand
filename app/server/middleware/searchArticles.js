import axios from 'axios';
import moment from 'moment';

const searchArticles = (request, response, next) => {

  const { sortBy, topics, selectedSources } = request.query;

  const beginDate = moment().subtract(3, 'weeks').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');
  let url = `https://newsapi.org/v2/everything/?from=${beginDate}&to=${endDate}&sortBy=${sortBy}&language=en&apiKey=${process.env.NEWS_KEY}`;

  if (topics) {
    const formattedTopic = topics.join('%20OR%20').split(' ').join('%20');
    url += `&q=${formattedTopic}`;
  }
  if (selectedSources) {
    const formattedSource = selectedSources.map((source) => {
      let parsedSource = source;
      if (typeof parsedSource === 'string') {
        parsedSource = JSON.parse(parsedSource);
      }
      return parsedSource.id;
    }).join(',');
    url += `&sources=${formattedSource}`;
  } else if (!selectedSources && !topics) {
    url += '&sources=techcrunch';
  }

  // Request information from newsAPI`
  axios
    .get(url)
    .then((newsResponse) => {
      console.log('++++++++++++++');
      console.log(newsResponse.data);
      request.articles = newsResponse.data.articles;
    })
    .catch((err) => {
      console.log('error newsAPI: ', err);
    })
    .then(() => next());
};

export default searchArticles;

