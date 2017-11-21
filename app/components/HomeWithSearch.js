import React from 'react';
import search from './helpers/search';
import Home from './Home';

const HomeWithSearch = () => (
  <Home search={search} />
);

export default HomeWithSearch;
