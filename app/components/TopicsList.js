import React from 'react';
import TopicsListItem from './TopicsListItem';

const TopicsList = (props) => (
  <div className="topics list">
    <h5>TopicsList</h5>
    <TopicsListItem className="topics list-item" />
    {props.topics && props.topics.map((topic, key) => {
      return <TopicsListItem className="topics list-item" topic={topic} key={key} />;
    })}
  </div>
);

export default TopicsList;
