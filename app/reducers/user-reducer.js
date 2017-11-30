import { FETCH_USER } from '../actions/index';

export default function (state = {}, action) {
  console.log('Action in user-reducer', action)
  switch (action.type) {
    case FETCH_USER:
      console.log('Triggering in correct Case');
      return action.payload.data[0];
    default:
      return state;
  }
}
