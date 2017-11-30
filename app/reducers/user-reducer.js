import { LOAD_USER, ADD_ARTICLE } from '../actions/index';

export default function (state = [], action) {
  console.log('Action in user-reducer', action);
  let newUser;
  let titles = [];
  switch (action.type) {
    case LOAD_USER:
      titles = action.payload.articles.map(article => article.title);
      console.log('New user store', [action.payload, titles]);
      return [action.payload, titles];
    case ADD_ARTICLE:
    
      newUser = Object.assign({}, state);
      newUser.articles.push(action.payload);
      return newUser;
    default:
      return state;
  }
}
