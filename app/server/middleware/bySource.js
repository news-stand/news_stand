import axios from 'axios';
import moment from 'moment';

const searchArticles = (request, response, next) => {

  let search;

  const { sortBy, topics } = request.query;
  let { selectedSources } = request.query;

  const defaultSource = {
    label: 'TechCrunch',
    id: 'techcrunch',
  };

  selectedSources = selectedSources || [defaultSource];

  console.log('THIS IS THE SELECTED SOURCE: ', selectedSources);
  console.log('SELECTED SOURCES TYPE: ', typeof selectedSources);
  const formattedSource = selectedSources.map((source) => {
    if (typeof source === 'object') {
      console.log('THIS SOURCE SHOULD BE OBJECT: ', typeof source);
      return source.id;
    } else {
      // if the type of source is string
      console.log('THIS SOURCE SHOULD BE STRING: ', typeof source);
      return JSON.parse(source).id;
    }
  }).join(',');
  console.log('THIS IS THE FORMATTEDSOURCE FOR GET REQUEST: ', formattedSource);
  const beginDate = moment().subtract(1, 'weeks').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');

  if (topics) {
    const formattedTopic = topics.join('%20OR%20').split(' ').join('%20');
    search = `https://newsapi.org/v2/everything?q=${formattedTopic}&sources=${formattedSource}&sortBy=${sortBy}&from=${beginDate}&to=${endDate}&language=en&apiKey=${process.env.NEWS_KEY}`;
  } else {
    search = `https://newsapi.org/v2/everything?sources=${formattedSource}&sortBy=${sortBy}&from=${beginDate}&to=${endDate}&language=en&apiKey=${process.env.NEWS_KEY}`;
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
