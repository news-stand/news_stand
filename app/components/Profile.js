import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uniq from 'node-uniq';
import { connect } from 'react-redux';

import NewsList from './NewsList';

const capitalizeFirstLetter = (string) => {
  const stringArr = string.split(' ');
  return stringArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

class Profile extends React.Component {
  constructor(props) {
    super(props);

    const uniqArticles = uniq(this.props.user.articles, i => i.url);

    this.state = {
      username: this.props.user.username,
      topics: this.props.user.topics,
      selectedSources: this.props.user.selectedSources,
      articles: uniqArticles,
      img: this.props.user.profileImg,
    };
    this.firstName = this.state.username.split(' ')[0];
    this.lastName = this.state.username.split(' ')[1];
  }

  render() {
    console.log(this.props);
    return (
      <div id="profile">
        <div className="col-1-3">

          <div className="sidebar">
            <div className="nav">
              <nav className="nav-bar">
                <Link to="/">Home</Link>
              </nav>
            </div>
            <div className="user-info">
              <div className="user">
                <img className="profile-pic" src={this.state.img} alt={this.state.username} />
                <div className="user-name">
                  <p>{this.firstName}<br />
                  {this.lastName}</p>
                </div>
              </div>
              <div className="topics-sources">
                {/* Favorite topics list */}
                <div className="profileTopicsList">
                  <h4>Saved Topics</h4>
                  {this.state.topics.map(topicString => (
                    <p key={topicString}>
                      {capitalizeFirstLetter(topicString)}
                    </p>
                  ))}
                </div>

                {/* Selected Sources List */}
                <div className="profileSourcesList">
                  <h4>Saved Sources</h4>
                  {this.state.selectedSources.map(sourceObj =>
                    <p key={sourceObj.label} >{capitalizeFirstLetter(sourceObj.label)}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2-3">
          {/* Favorite News Articles */}
          <div className="profileFavoriteArticles">
            <h2>Favorite Articles</h2>
            {/* turnary operator to show if now articles are liked */}
            {this.state.articles.length === 0 ?
              <p>Articles you like will be shown here</p> :
              this.props.fetchedUser[0].articles && <NewsList newsArticles={this.props.fetchedUser[0].articles} />
            }
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string),
    selectedSources: PropTypes.arrayOf(PropTypes.object),
    profileImg: PropTypes.string,
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return { fetchedUser: state.user };
}
export default connect(mapStateToProps)(Profile);
