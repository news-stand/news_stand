import User from '../database/models/user';

const setPreferences = (request, response, next) => {
  // console.log('THIS IS THE REQUEST.USER: ', request.user);
  console.log('THIS IS THE REQUEST.BODY: ', request.body);

  if (request.user) {
    User.findByOneAndUpdate({ googleId: request.user.googleId }, { topics: request.body.topics, selectedSources: request.body.sources });
  }

  // TODO: add feature notifying user needs to be logged in

  next();
};

export default setPreferences;
