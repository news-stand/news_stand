import axios from 'axios';
import moment from 'moment';

const searchArticles = (request, response, next) => {

  let search;

  const { sortBy, topics, selectedSources } = request.query;
  //const { selectedSources } = request.query;

  // const defaultSource = {
  //   label: 'TechCrunch',
  //   id: 'techcrunch',
  // };

  //selectedSources = selectedSources; //|| [defaultSource];

  const formattedSource = selectedSources.map(source => source.id).join(',');
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
