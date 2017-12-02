import Messages from '../database/models/messages';

const addMessage = (request, response) => {
  if (request.user) {
    console.log(request.body.googleId, '       ', request.body.articleTitle);

    const findCriteria = { articleTitle: request.body.articleTitle };
    Messages.findOne(findCriteria)
      .exec()
      .then((doc1) => {
        if (doc1 !== null) {
          var temp = doc1.users;
          var index =temp.indexOf(request.body.googleId);
          if (index >= 0) {
            temp.splice(index,1);
          } else {
            temp.push(request.body.googleId);
          }
          const toUpdate = {users: temp};
          Messages.findOneAndUpdate(findCriteria, toUpdate)
            .exec()
            .then((doc) => {
              console.log(doc);
              response.status(200).end('Added Like');
            })
            .catch((err) => {
              console.log('error adding likes to the database: ', err);
            });
        } else {
          const newMessages = new Messages({
            articleTitle: request.body.articleTitle,
            users: [request.body.googleId],
          });
          newMessages.save((err) => {
            if (err) {
              console.log('Error adding a new article with user like', err);
            } else {
              console.log('Added liked user one');
              response.status(200).end('Added like');
            }
          });
        }
      });

    // Messages.findOneAndUpdate(findCriteria, toUpdate)
    //   .exec()
    //   .then((doc) => {
    //     console.log(doc);
    //     response.status(200).end('Added Message');
    //   })
    //   .catch((err) => {
    //     console.log('error adding favorite to the database: ', err);
    //   });
  }
};

export default addMessage;
