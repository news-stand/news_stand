import React from 'react';
import TopicsListItem from './TopicsListItem';

const TopicsList = (props) => (
  <div className="topics list">
    <h5 className="topics list">Select Topics:</h5>
    <ul className="topics list">
      {props.topics && props.topics.map((topic, key) => {
        return (
          <TopicsListItem
            className="topics list-item"
            topic={topic}
            key={topic}
            index={key}
            onTopicRemoval={props.onTopicRemoval}
          />);
      })}
    </ul>
  </div>
);

export default TopicsList;
