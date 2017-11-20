import React from 'react';
import TopicsSearch from './TopicsSearch';
import TopicsList from './TopicsList';

const Topics = props => (
  <div className="topics">
    <TopicsSearch className="topics search" onTopicSearch={props.onTopicSearch} />
    <TopicsList
      topics={props.topics}
      onTopicRemoval={props.onTopicRemoval}
      className="topics list"
    />
  </div>
);

export default Topics;
