import Messages from '../database/models/messages';
import Message from '../database/models/message';

const addMessage = (request, response) => {
  if (request.user) {
    console.log(request.body.userName,'       ', request.body.articleTitle);
    const newMessage = new Message({
      userName: request.body.userName,
      message: request.body.message,
    });

    const findCriteria = { articleTitle: request.body.articleTitle };
    const toUpdate = { $addToSet: { messages: newMessage } };
    Messages.findOne(findCriteria)
      .exec()
      .then((doc1) => {
        if (doc1 !== null) {
          Messages.findOneAndUpdate(findCriteria, toUpdate)
            .exec()
            .then((doc) => {
              console.log(doc);
              response.status(200).end('Added Message');
            })
            .catch((err) => {
              console.log('error adding favorite to the database: ', err);
            });
        } else {
          const newMessages = new Messages({
            articleTitle: request.body.articleTitle,
            messages: [newMessage],
          });
          newMessages.save((err) => {
            if (err) {
              console.log(err);
            } else {
              console.log('Added Messages');
              response.status(200).end('Added Message');
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
