import React from 'react';
import PropTypes from 'prop-types';
import TopicsSearch from './TopicsSearch';
import TopicsList from './TopicsList';

const Topics = props => (
  <div className="topics">
    <TopicsSearch
      className="search"
      onTopicSearch={props.onTopicSearch}
      setPreferences={props.setPreferences}
    />
    <TopicsList
      topics={props.topics}
      onRemoval={props.onRemoval}
      className="list"
    />
  </div>
);

Topics.propTypes = {
  onTopicSearch: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemoval: PropTypes.func.isRequired,
};

export default Topics;
