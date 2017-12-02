import User from '../database/models/user';

const getUser = (request, response, next) => {
  if (request.user) {
    User.find({
      googleId: request.user.googleId,
    })
      .then((result) => {
        console.log('RESULT', result);
        request.result = result;
      })
      .then(() => {
        next();
      });
  }
};

export default getUser;
