import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Heart from 'mui-icons/cmdi/heart';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToFavorites, removeFromFavorites } from '../actions/index';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      likes: 0,
    };
    this.onAddFavorite = this.onAddFavorite.bind(this);
    this.onRemoveFavorite = this.onRemoveFavorite.bind(this);
  }
  componentDidMount() {
    axios.post('/likes', { articleTitle: this.props.article.title})
      .then((num) => {
        this.setState({likes: parseInt(num.data)});
      })
      .catch((err) => {
        throw err;
      });

  }
  onAddFavorite(article, user) {
    this.props.addToFavorites(article, user);
    this.setState({likes: this.state.likes+1});
  }

  onRemoveFavorite(article, user) {
    this.props.removeFromFavorites(article, user);
    this.setState({likes: this.state.likes-1});
  }

  render() {
    const included = this.props.user[1].includes(this.props.article.title) ? 'favorited' : 'favorite';
    return (
      <div>
        <IconButton
          className="favbtn"
          tooltio = {'' + this.state.likes}
          onClick={() => { if (this.props.user[1].includes(this.props.article.title)) { this.onRemoveFavorite(this.props.article, this.props.user[0].googleId); } else { this.onAddFavorite(this.props.article, this.props.user[0].googleId); } }}
        >
          <div>{this.state.likes}</div>
          {this.props.user.length > 0 && <Heart className={included} />}
        </IconButton>
      </div>
    );
  }
}

FavoriteButton.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
    author: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps({ user }) {
  return { user };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites, removeFromFavorites }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
