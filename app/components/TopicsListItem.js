import React from 'react';
import PropTypes from 'prop-types';

const TopicsListItem = props => (
  <div className="topics list-item">
    <button
      type="button"
      className="remove btn add-remove-btn"
      onClick={() => { props.onRemoval(props.index, 'topics'); }}
    >
      x
    </button>
    {props.topic}
  </div>
);

TopicsListItem.propTypes = {
  onRemoval: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
};

export default TopicsListItem;
