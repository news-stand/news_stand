const getPreferences = (request, response, next) => {
  if (request.user) {
    request.query = {
      topics: request.user.topics,
      selectedSources: request.user.selectedSources,
      sortBy: 'publishedAt',
    };

    request.preferences = {
      topics: request.user.topics,
      selectedSources: request.user.selectedSources,
    };
  }
  next();
};

export default getPreferences;
