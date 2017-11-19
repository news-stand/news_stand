import React from 'react';
import TopicsListItem from './TopicsListItem';

const TopicsList = (props) => (
  <div className="topics list">
    <h5>Select Topics:</h5>
    <ul>
      {props.topics && props.topics.map((topic, key) => {
        return <TopicsListItem className="topics list-item" topic={topic} key={key} />;
      })}
    </ul>
  </div>
);

export default TopicsList;
