import User from '../database/models/user';

const addFavorite = (request, response, next) => {
  console.log('USER': request.user);
  next();
};

export default addFavorite;
