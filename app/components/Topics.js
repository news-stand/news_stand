import React from 'react';
import PropTypes from 'prop-types';
import TopicsSearch from './TopicsSearch';
import TopicsList from './TopicsList';

const Topics = props => (
  <div className="topics">
    <TopicsSearch
      className="topics search"
      onTopicSearch={props.onTopicSearch}
    />
    <TopicsList
      topics={props.topics}
      onTopicRemoval={props.onTopicRemoval}
      className="topics list"
    />
  </div>
);

Topics.propTypes = {
  onTopicSearch: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTopicRemoval: PropTypes.func.isRequired,
};

export default Topics;
