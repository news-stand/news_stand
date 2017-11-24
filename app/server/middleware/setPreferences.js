import User from '../database/models/user';

const setPreferences = (request, response, next) => {
  if (request.user) {
    User.findByOneAndUpdate({ googleId: request.user.googleId }, { topics: request.query.topics, sources: request.query.sources });
  }

  // TODO: add feature notifying user needs to be logged in

  next();
};

export default setPreferences;
