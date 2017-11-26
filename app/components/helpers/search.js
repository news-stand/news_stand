import axios from 'axios';

const search = (options, successCallback) => {
  axios
    .get('/articles', {
      params: options,
    })
    .then((newsArticles) => {
      successCallback(newsArticles.data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

export default search;
