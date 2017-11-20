import React from 'react';
import SourceItem from './SourceItem';

export default (props) => {
  const sources = props.selectedSources.map((source) => {
    return <SourceItem source={source} />;
  });
  return (
    <div className="selectedSourcesContainer">
      {sources}
    </div>
  );
};
