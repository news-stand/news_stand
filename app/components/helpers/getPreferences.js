import axios from 'axios';

const getPreferences = (options, callback) => {
  axios.get('/preferences', { params: options })
    .then((articlesAndPreferences) => {
      callback(articlesAndPreferences);
    });
};

export default getPreferences;
