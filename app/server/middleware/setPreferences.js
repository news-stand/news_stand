import User from '../database/models/user';

const setPreferences = (request, response, next) => {
  if (request.user) {
    User.findOneAndUpdate({ googleId: request.profile.googleId }, {
      topics: /* some new topics */
      sources: /* some new sources */
    });
  }
};

export default setPreferences;