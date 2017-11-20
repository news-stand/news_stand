import axios from 'axios';

module.exports = (request, response, next) => {
  axios
    .get(`https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_KEY}`)
    .then((newsAPI) => {
      request.sources = newsAPI.data.sources.map((source) => {
        return {
          id: source.id,
          name: source.name,
        };
      });
      next();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
