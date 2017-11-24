import User from '../database/models/user';

const authenticate = (request, response, next) => {
  if (request.user) {
    request.query.topics = request.user.topics;
    request.query.selectedSources = request.user.selectedSources;
  }
  response.redirect('/articles');
  next();
};

export default authenticate;
