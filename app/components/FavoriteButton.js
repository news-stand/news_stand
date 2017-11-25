import React from 'react';
// import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Heart from 'mui-icons/cmdi/heart';


const FavoriteButton = () => (
  <div className="favorite btn">
    <IconButton>
      <Heart />
    </IconButton>
  </div>
);

export default FavoriteButton;
