import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

const TopicsListItem = props => (
  <div className="list-item">
    <Chip
      style={{ fontSize: '12px', marginBottom: '5px' }}
      label={props.topic}
      onRequestDelete={() => { props.onRemoval(props.index, 'topics'); }}
      className="remove btn add-remove-btn"
    />
  </div>
);

TopicsListItem.propTypes = {
  onRemoval: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
};

export default TopicsListItem;
