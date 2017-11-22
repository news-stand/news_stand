import React from 'react';
import PropTypes from 'prop-types';
import SourceItem from './SourceItem';

export default (props) => {
  const sources = props.selectedSources.map(source => (
    <SourceItem key={source} source={source} />
  ));
  return (
    <div className="selectedSourcesContainer">
      {sources}
    </div>
  );
};

// validate props here
