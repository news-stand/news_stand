import React from 'react';
import PropTypes from 'prop-types';
import SourceItem from './SourceItem';

const SelectedSources = (props) => {
  const sources = props.selectedSources.map(source => (
    <SourceItem key={source.id} source={source.label} />
  ));
  return (
    <div className="selectedSourcesContainer">
      {sources}
    </div>
  );
};

SelectedSources.propTypes = {
  selectedSources: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectedSources;
