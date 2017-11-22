import React from 'react';
import PropTypes from 'prop-types';

const TopicsListItem = props => (
  <div className="topics list-item">
    <button
      type="button"
      className="list-item btn"
      onClick={() => { props.onTopicRemoval(props.index); }}
    >
      x
    </button>
    {props.topic}
  </div>
);

TopicsListItem.propTypes = {
  onTopicRemoval: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TopicsListItem;
