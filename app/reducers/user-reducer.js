import { LOAD_USER, ADD_ARTICLE } from '../actions/index';

export default function (state = {}, action) {
  console.log('Action in user-reducer', action);
  let newUser;
  switch (action.type) {
    case LOAD_USER:
      console.log('Triggering in LOAD USER', action.payload);
      return action.payload;
    case ADD_ARTICLE:
      console.log('Triggering in ARTICLE REDUCER', action.payload);
      newUser = Object.assign({}, state);
      newUser.articles.push(action.payload);
      return newUser;
    default:
      return state;
  }
}
