import axios from 'axios';

export const LOAD_USER = 'LOAD_USER';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

export function loadUser(user) {
  console.log('DID THIS FUNCTION GET CALLED?', user);
  // const userRequest = axios.get('/user');
  return {
    type: LOAD_USER,
    payload: user,
  };
}

export function addToFavorites(article) {
  axios.post('/favorites', article);
console.log('ADD TO FAV IN ACTIONS');
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
}

export function removeFromFavorites(article) {
  axios.post('/remove', article);
  return {
    type: REMOVE_ARTICLE,
    payload: article,
  };
}
