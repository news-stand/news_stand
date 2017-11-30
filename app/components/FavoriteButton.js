import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Heart from 'mui-icons/cmdi/heart';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToFavorites } from '../actions/index';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
    this.onAddFavorite = this.onAddFavorite.bind(this);
  }
  
  // checkIfFavorite() {
  //    if ()
  // // }
  onAddFavorite(article) {
    console.log('ADD TO FAVORITES');
    axios.post('/favorites', article)
      .then((response) => {
        if (response.data === 'favorite added') {
          this.setState({
            favorited: true,
          });
        }
        this.props.addToFavorites(article);
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

    console.log('Is it in favorites?', this.props.user.articles);
    console.log('THE ARticle', this.props.article);
    return (
      <div>
        <IconButton 
          className="favbtn"
          onClick={() => { if (this.state.favorited) { this.onRemoveFavorite(this.props.article); } else { this.onAddFavorite(this.props.article); } }}
        >
          <Heart className={this.props.user.articles.includes(this.props.article) ? 'favorited' : 'favorite'} />
          {/* <Heart className={this.state.favorited ? 'favorited' : 'favorite'} /> */}
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
  return bindActionCreators({ addToFavorites }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
