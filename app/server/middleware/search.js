import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getArticles = (search, successCallback, failureCallback) => {
  axios.get(search)
    .then((newsResponse) => {
      successCallback(newsResponse.data);
    })
    .catch((err) => {
      failureCallback(err);
    });
};

export default getArticles;
