import FETCH_USER from TODO

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
      return state;
  }
}