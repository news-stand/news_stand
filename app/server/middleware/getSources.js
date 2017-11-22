import axios from 'axios';

export default (request, response, next) => {
  axios
    .get(`https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_KEY}`)
    .then((newsAPI) => {
      request.sources = newsAPI.data.sources.map((source) => {
        return {
          id: source.id,
          label: source.name,
        };
      });
    })
    .catch((err) => {
      console.log('error', err);
    })
    .then(() => next());
};
