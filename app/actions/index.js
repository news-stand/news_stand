import axios from 'axios';

export const LOAD_USER = 'LOAD_USER';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

var like = (article,user) => {
   axios.post('/like', { articleTitle: article.title, googleId: user})
      .then(() => {
      })
      .catch((err) => {
        throw err;
      });
}

export function loadUser(user) {
  return {
    type: LOAD_USER,
    payload: user,
  };
}

export function addToFavorites(article, user) {
  axios.post('/favorites', article);
  like(article, user);
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
}

export function removeFromFavorites(article, user) {
  axios.post('/remove', article);
  like(article, user);
  return {
    type: REMOVE_ARTICLE,
    payload: article,
  };
}
