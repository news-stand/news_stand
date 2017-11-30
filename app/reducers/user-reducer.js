import { LOAD_USER } from '../actions/index';


export default function (state = {}, action) {
  console.log('Action in user-reducer', action);
  switch (action.type) {
    case LOAD_USER:
      console.log('Triggering in LOAD USER', action.payload);
      return action.payload;
    default:
      return state;
  }
}
