import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Heart from 'mui-icons/cmdi/heart';


const FavoriteButton = ({ article, onAddFavorite }) => (
  <div className="favorite btn">
    <IconButton onClick={() => onAddFavorite(article)}>
      <Heart />
    </IconButton>
  </div>
);

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
  onAddFavorite: PropTypes.func.isRequired,
};
