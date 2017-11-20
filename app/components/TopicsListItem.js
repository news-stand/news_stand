import React from 'react';

const TopicsListItem = props => (
  <div
    className="topics list-item"
    onClick={() => { props.onTopicRemoval(props.index); }}
  >
    {props.topic}
  </div>
);

export default TopicsListItem;
