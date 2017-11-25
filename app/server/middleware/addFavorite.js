import User from '../database/models/user';
import Article from '../database/models/article';

const addFavorite = (request, response, next) => {
  if (request.user) {
    const favorited = new Article({
      urlToImage: request.body.urlToImage,
      title: request.body.title,
      description: request.body.description,
      source: {
        name: request.body.source.name,
      },
      author: request.body.author,
      url: request.body.url,
    });

    const findCriteria = { googleId: request.user.googleId };
    const toUpdate = { $addToSet: { articles: [favorited] } };

    User.findOneAndUpdate(findCriteria, toUpdate)
      .exec()
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.log('error adding favorite to the database: ', err);
      });
  }

  next();
};

export default addFavorite;
