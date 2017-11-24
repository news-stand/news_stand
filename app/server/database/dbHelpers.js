import Source from './models/source';
import db from './db';

// this function is meant to handle source data back from the NewsAPI.
// it should create and save a new document for any source
// that doesn't already exist
const saveSources = (apiSourceData) => {
  const sources = apiSourceData.items.forEach((source) => {
// TODO: we never do a check to see if the source exists.  Is this intentional?

    // check to see if souce exists
    // if it doesn't exist, create a new doc and save it
    // if it does exist, do nothing
    let newSource = new Source({
      id: source.id,
      name: source.name,
    });
    return newSource;
  });
};
