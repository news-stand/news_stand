import React from 'react';

const TopicsListItem = (props) => (
  <li
    className="topics list-item"
    onClick={() => { props.onTopicRemoval(props.index); }}
  >
    {props.topic}
  </li>
);

export default TopicsListItem;
