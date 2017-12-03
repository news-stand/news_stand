import { LOAD_USER, ADD_ARTICLE, REMOVE_ARTICLE } from '../actions/index';

export default function (state = [{}, []], { type, payload }) {
  let newUser;
  let index;
  let titles = [];
  switch (type) {
    case LOAD_USER:
      titles = payload.articles.map(article => article.title);
      return [payload, titles];
    case ADD_ARTICLE:
      newUser = Object.assign({}, state[0]);
      newUser.articles.push(payload);
      return [newUser, state[1].concat([payload.title])];
    case REMOVE_ARTICLE:
      newUser = Object.assign({}, state[0]);
      newUser.articles.forEach((obj, i) => {
        if (obj.title === payload.title) {
          index = i;
        }
      });
      newUser.articles.splice(index, 1);
      titles = state[1];
      titles.splice(index, 1);
      return [newUser, titles];
    default:
      return state;
  }
}
