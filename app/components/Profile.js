import React from 'react';
import PropTypes from 'prop-types';

import TopicsList from './TopicsList';
import SelectedSources from './SelectedSources';
import NewsList from './NewsList';
import NewsItem from './NewsItem';

const Profile = ({user}) => (
  <div id="profile">
    <div className="user">
      <h2>{user.username}</h2>
    </div>
    
  </div>
)

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}