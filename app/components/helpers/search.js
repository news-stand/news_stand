import axios from 'axios';

const search = (options, successCallback) => {
  axios
    .get('/articles', {
      params: options,
    })
    .then((newsArticles) => {
      console.log('returned articles: ', newsArticles);
      successCallback(newsArticles.data);
      // this.setState({ articles: newsArticles.data });
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};

export default search;
