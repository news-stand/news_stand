import Messages from '../database/models/messages';


const grabMessage = (request, response) => {
  const findCriteria = { articleTitle: request.body.articleTitle };
  Messages.findOne(findCriteria)
    .exec()
    .then((doc1) => {
      if (doc1 === null) {
        response.send([]);
      } else {
        response.send(doc1.messages);
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
export default grabMessage;
