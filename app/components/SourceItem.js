import React from 'react';
import PropTypes from 'prop-types';

const SourceItem = ({ source }) => (
  <div className="selectedSources">
    <p>{source}</p>
  </div>
);

SourceItem.propTypes = {
  source: PropTypes.string.isRequired,
};

export default SourceItem;

// validate props here
