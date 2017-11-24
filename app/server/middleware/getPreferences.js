import User from '../database/models/user';

const getPreferences = (request, response, next) => {
  if (request.user) {
    request.query.topics = request.user.topics;
    request.query.selectedSources = request.user.selectedSources;
  }
};

export default getPreferences;
