import React from 'react';
import PropTypes from 'prop-types';

const SourceItem = props => (
  <div className="selectedSources">
    <button
      type="button"
      className="source-item btn"
      onClick={() => { props.onRemoval(props.index, 'selectedSources'); }}
    >
      x
    </button>
    <span>{props.source}</span>
  </div>
);

SourceItem.propTypes = {
  source: PropTypes.string.isRequired,
  onRemoval: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SourceItem;
