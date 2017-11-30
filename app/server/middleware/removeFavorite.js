import User from '../database/models/user';

const removeFavorite = (request, response, next) => {
  if (request.user) {
    User.update(
      { googleId: request.user.googleId },
      { $pull: { 'articles': {title: request.body.title }}}
    )
      .then((res) => {
        console.log('Response from removal', res);
        next();
      }).catch((err) => {
        console.log(err);
      });
  }
};

export default removeFavorite;
