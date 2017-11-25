import React from 'react';
import PropTypes from 'prop-types';

import Topics from './Topics';
import TopicsList from './TopicsList';
import SelectedSources from './SelectedSources';
import NewsList from './NewsList';
import NewsItem from './NewsItem';

const Profile = ({ user }) => {

  function capitalizeFirstLetter(string) {
    const stringArr = string.split(' ');
    return stringArr.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
  }

  return (
    <div id="profile">
      <div className="user">
        <h2>{user.username}</h2>
      </div>

      {/* Favorite topics list */}
      <div className="profileTopicsList">
        <h3>Topics of Interest</h3>
        {user.topics.map(topicString => <p>{capitalizeFirstLetter(topicString)}</p>)}
      </div>

      {/* Selected Sources List */}
      <div className="profileSourcesList">
        <h3>Favorite News Sources</h3>
        {user.selectedSources.map(sourceObj => <p>{capitalizeFirstLetter(sourceObj.label)}</p>)}
      </div>

      {/* Favorite News Articles */}


    </div>
  );

};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

export default Profile;
