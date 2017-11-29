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
  const userRequest = axios.get('/auth');
  return {
    type: FETCH_FAVS,
    payload: userRequest,
  };
}
