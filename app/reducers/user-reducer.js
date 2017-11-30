import { LOAD_USER, ADD_ARTICLE, REMOVE_ARTICLE } from '../actions/index';

export default function (state = [], { type, payload }) {
  // console.log('Action in user-reducer', type, payload);
  let newUser;
  let title;
  let index;
  let titles = [];
  let articles = [];
  switch (type) {
    case LOAD_USER:
      titles = payload.articles.map(article => article.title);
      return [payload, titles];
    case ADD_ARTICLE:
      newUser = Object.assign({}, state[0]);
      newUser.articles.push(payload);
      return [newUser, state[1].concat([payload.title])];
    case REMOVE_ARTICLE:
      title = payload.title;
      console.log('Title', title);
      // find index of obj in article
      // create new copy of object
      newUser = Object.assign({}, state[0]);
      // Save array in variable;
      // arr = newUser.articles;
      // Get index
      index = Object.values(newUser.articles).indexOf(title);
      // remove obj
      newUser.articles.splice(index, 1);
      // remove item 
      // remove title from titles array
      state[1].splice(index, 1);
      // index = newUser.articles.map(article => Object.values(article).indexOf(payload.title) !== -1);
      // newUser = 
      // console.log('INDEX', newUser.articles.indexOf(payload));
      return [newUser, state[1].splice(index, 1)];
    default:
      return state;
  }
}
