import React from 'react';
import PropTypes from 'prop-types';
import TopicsListItem from './TopicsListItem';

const TopicsList = props => (
  <div className="topics-list-container">
    <div className="topics-list">
      {props.topics && props.topics.map((topic, key) => (
        <TopicsListItem
          className="topics list-item"
          topic={topic}
          key={topic}
          index={key}
          onTopicRemoval={props.onTopicRemoval}
        />
        ))}
    </div>
  </div>
);

TopicsList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTopicRemoval: PropTypes.func.isRequired,
};

export default TopicsList;
