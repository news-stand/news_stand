import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NewsList from './NewsList';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      topics: this.props.user.topics,
      selectedSources: this.props.user.selectedSources,
      articles: this.props.user.articles,
    }

    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
  }


  capitalizeFirstLetter(string) {
    const stringArr = string.split(' ');
    return stringArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  render() {
    return (
      <div id="profile">
        <div className="user">
          <h2>{this.state.username}</h2>
        </div>

        <button><Link to="/">Back to Homepage</Link></button>

        {/* Favorite topics list */}
        <div className="profileTopicsList">
          <h3>Topics of Interest</h3>
          {this.state.topics.map(topicString => <p>{this.capitalizeFirstLetter(topicString)}</p>)}
        </div>

        {/* Selected Sources List */}
        <div className="profileSourcesList">
          <h3>Favorite News Sources</h3>
          {this.state.selectedSources.map(sourceObj =>
            <p>{this.capitalizeFirstLetter(sourceObj.label)}</p>)}
        </div>

        {/* Favorite News Articles */}
        <div className="profileFavoriteArticles">
          <h3>Liked Articles</h3>
          {/* turnary operator to show if now articles are liked */}
          {this.state.articles.length === 0 ?
            <p>Articles you like will be shown here</p> :
            <NewsList newsArticles={this.props.user.articles} />
          }
        </div>

      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Profile;
