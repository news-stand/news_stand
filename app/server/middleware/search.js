import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getArticles = (baseSearch, sortBy, successCallback, failureCallback) => {
  axios.get(`${baseSearch}&sortBy=${sortBy}`)
    .then((newsResponse) => {
      successCallback(newsResponse.data);
    })
    .catch((err) => {
      failureCallback(err);
    });
};

export default getArticles;
