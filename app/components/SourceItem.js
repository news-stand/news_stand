import React from 'react';
import PropTypes from 'prop-types';

const SourceItem = props => (
  <div className="selectedSources">
    <button
      type="button"
      className="source-item btn"
      onClick={() => { props.onTopicRemoval(props.index); }}
    >
      x
    </button>
    {props.source}
  </div>
);

SourceItem.propTypes = {
  source: PropTypes.string.isRequired,
  onTopicRemoval: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SourceItem;

// validate props here
