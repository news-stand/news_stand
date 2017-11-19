import React from 'react';
import TopicsSearch from './TopicsSearch';
import TopicsList from './TopicsList'

const Topics = (props) => (
  <div className="topics">
    <h5>Topics Component Here</h5>
    <TopicsSearch className="topics search" />
    <TopicsList topics={props.topics} className="topics list" />
  </div>
);

export default Topics;
