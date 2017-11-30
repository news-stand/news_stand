import axios from 'axios';

export const LOAD_USER = 'LOAD_USER';
// export const ADD_ARTICLE = 'ADD_ARTICLE';

export function loadUser(user) {
  console.log('DID THIS FUNCTION GET CALLED?', user);
  // const userRequest = axios.get('/user');
  return {
    type: LOAD_USER,
    payload: user,
  };
}
