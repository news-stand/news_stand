import React, { Component } from 'react';
import SourceItem from './SourceItem';

export default class SelectedSources extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sources = this.props.selectedSources.map((source) => {
      return <SourceItem source={source} />;
    });
    return (
      <div className="selectedSourcesContainer">
        {sources}
      </div>
    )
  }
}
