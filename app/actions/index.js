import axios from 'axios';

// export const FETCH_FAVS = 'FETCH_FAVS';
export const FETCH_USER = 'FETCH_USER';

// export function fetchFavorites() {
//   axios
//     .get('/articles', {
//       params: options,
//     })
//     .then((newsArticles) => {
//       successCallback(newsArticles.data);
//     })
//     .catch((error) => {
//       console.log('error: ', error);
//     });
// }

export function fetchUser() {
  console.log('DID THIS FUNCTION GET CALLED?');
  const userRequest = axios.get('/user');
  return {
    type: FETCH_USER,
    payload: userRequest,
  };
}
