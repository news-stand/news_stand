import axios from 'axios';

export const GET_FAVS = 'GET_FAVS';

export function fetchFavorites() {
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
}

export function getUser() {
  const userRequest = axios.get('/auth');
  
}