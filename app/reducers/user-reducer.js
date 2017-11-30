import { LOAD_USER, ADD_ARTICLE, REMOVE_ARTICLE } from '../actions/index';

export default function (state = [], action) {
  console.log('Action in user-reducer', action);
  let newUser;
  let titles = [];
  switch (action.type) {
    case LOAD_USER:
      titles = action.payload.articles.map(article => article.title);
      return [action.payload, titles];
    case ADD_ARTICLE:
      newUser = Object.assign({}, state[0]);
      newUser.articles.push(action.payload);
      return [newUser, state[1].concat([action.payload.title])];
    case REMOVE_ARTICLE:
      newUser = Object.assign({}, state[0]);
      newUser = newUser.articles.splice(newUser.articles.indexOf(action.payload), 1);
      titles = state[1].splice(state[1].indexOf(action.payload.title), 1);
      return [newUser, titles];
    default:
      return state;
  }
}
