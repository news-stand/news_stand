import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

export function fetchUser() {
  console.log('DID THIS FUNCTION GET CALLED?');
  const userRequest = axios.get('/user');
  return {
    type: FETCH_USER,
    payload: userRequest,
  };
}
