import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Heart from 'mui-icons/cmdi/heart';


const FavoriteButton = ({ onAddFavorite }) => (
  <div className="favorite btn">
    <IconButton onClick={onAddFavorite}>
      <Heart />
    </IconButton>
  </div>
);

export default FavoriteButton;

FavoriteButton.propTypes = {
  onAddFavorite: PropTypes.func.isRequired,
};
