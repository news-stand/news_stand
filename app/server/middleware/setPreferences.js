import User from '../database/models/user';

const setPreferences = (request, response, next) => {
  // console.log('THIS IS THE REQUEST.USER: ', request.user);
  console.log('THIS IS THE REQUEST.BODY: ', request.body);

  if (request.user) {
    User.findOneAndUpdate(
      { googleId: request.user.googleId },
      { $set: {topics: request.body.topics, selectedSources: request.body.selectedSources } },
      (err, doc) => {
        if (err) {
          console.log('There was an error updating preferences: ', err);
        } else {
          console.log('Successfully updated doc: ', doc);
        }
      },
    );
  }

  // TODO: add feature notifying user needs to be logged in
  
  next();
};

export default setPreferences;
