import React from 'react';
import PropTypes from 'prop-types';
import SourceItem from './SourceItem';

const SelectedSources = (props) => {
  const sources = props.selectedSources.map((source, index) => (
    <SourceItem
      key={source.id}
      source={source.label}
      index={index}
      onTopicRemoval={props.onTopicRemoval}
    />
  ));
  return (
    <div className="selectedSourcesContainer">
      {sources}
    </div>
  );
};

SelectedSources.propTypes = {
  selectedSources: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTopicRemoval: PropTypes.func.isRequired,
};

export default SelectedSources;
