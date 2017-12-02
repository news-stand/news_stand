import Messages from '../database/models/messages';

const addMessage = (request, response) => {

  console.log(request.body.articleTitle);

  const findCriteria = { articleTitle: request.body.articleTitle };
  Messages.findOne(findCriteria)
    .exec()
    .then((doc1) => {
      if (doc1 !== null) {
        console.log('+++++++++++++++++++++++++++++++++++++', doc1.users.length);
        response.status(200).end(doc1.users.length+'');
      } else {
        response.status(200).end(0+'');
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

};

export default addMessage;
