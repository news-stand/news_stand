import React from 'react';
import SourceItem from './SourceItem';

export default (props) => {
  const sources = props.selectedSources.map(source => (
    <SourceItem key={source.id} source={source.label} />
  ));
  return (
    <div className="selectedSourcesContainer">
      {sources}
    </div>
  );
};
