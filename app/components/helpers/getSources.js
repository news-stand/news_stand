import axios from 'axios';

const getSources = (callback) => {
  axios
    .get('/sources')
    .then((sources) => {
      callback(sources);
    })
    .catch((err) => {
      throw err;
    });
};

export default getSources;
