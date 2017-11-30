import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Heart from 'mui-icons/cmdi/heart';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { addToFavorites } from '../actions/index';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
    this.onAddFavorite = this.onAddFavorite.bind(this);
  }

  onAddFavorite(article) {
    console.log('ADD TO FAVORITES');
    axios.post('/favorites', article)
      .then((response) => {
        if (response.data === 'favorite added') {
          this.setState({
            favorited: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  onRemoveFavorite(article) {
    console.log('remove frome FAVORITES');
    axios.post('/remove', article)
      .then(() => {
        this.setState({
          favorited: false,
        });
      });
  }

  render() {
    return (
      <div>
        <IconButton 
          className="favbtn"
          onClick={() => { if (this.state.favorited) { this.onRemoveFavorite(this.props.article); } else { this.onAddFavorite(this.props.article); } }}
        >
          <Heart className={this.state.favorited ? 'favorited' : 'favorite'} />
        </IconButton>
      </div>
    );
  }
}

export default FavoriteButton;

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
