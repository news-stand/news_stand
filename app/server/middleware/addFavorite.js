import User from '../database/models/user';

const addFavorite = (request, response, next) => {
  console.log('USER: ', request.user);

  if (request.user) {
    // User.findOneAndUpdate(
    //   { googleId: request.user.googleId },
    //   { $set: { topics: request.body.topics } },
    //   (err, doc) => {
    //     if (err) {
    //       console.log('There was an error updating preferences: ', err);
    //     } else {
    //       console.log('Successfully updated doc: ', doc);
    //     }
    //   },
    // );
  }

  next();
};

export default addFavorite;
