import FETCH_USER from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
      return state;
  }
}
