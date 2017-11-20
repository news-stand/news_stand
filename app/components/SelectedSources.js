import React, { Component } from 'react';
import SourceItem from './SourceItem';

export default () => {
  const sources = this.props.selectedSources.map((source) => {
    return <SourceItem source={source} />;
  });
  return (
    <div className="selectedSourcesContainer">
      {sources}
    </div>
  );
}
