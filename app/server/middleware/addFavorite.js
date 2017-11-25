import User from '../database/models/user';
import Article from '../database/models/user';

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

    User.findOneAndUpdate(
      { googleId: request.user.googleId },
      { $addToSet: { articles: favorited } },
      (err, doc) => {
        if (err) {
          console.log('There was an error updating preferences: ', err);
        } else {
          console.log('Successfully updated doc: ', doc);
        }
      },
    );
  }

  next();
};

export default addFavorite;
