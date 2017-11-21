import React from 'react';

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

export default TopicsListItem;
