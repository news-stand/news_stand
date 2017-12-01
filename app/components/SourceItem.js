import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

const SourceItem = props => (
  <div className="selectedSources">
    <Chip
      style={{ fontSize: '12px', marginBottom: '5px' }}
      label={props.source}
      onRequestDelete={() => { props.onRemoval(props.index, 'selectedSources'); }}
      className="remove btn add-remove-btn"
    />
  </div>
);

SourceItem.propTypes = {
  source: PropTypes.string.isRequired,
  onRemoval: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SourceItem;
