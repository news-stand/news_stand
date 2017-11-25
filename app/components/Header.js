import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="header">
    <form>
      <img src="https://i.imgur.com/mCSoavu.png" alt="news stand" className="logo" />
      Viewing {props.sortBy === 'popularity' ? 'most popular' : 'most recent'} news  
      <button type="button" className="btn btn-primary toggle" onClick={props.onToggleClick}>{props.sortBy === 'popularity' ? 'View most recent' : 'View trending'} </button>
      <button
        type="button"
        className="btn btn-primary refresh"
        onClick={props.onRefreshClick}
      >Refresh
      </button>
    </form>
    <button><Link to="/profile">Profile</Link></button>
    <div><Link to="/login">Login</Link></div>
    <div><a href="/auth/logout">Logout</a></div>
  </div>
);

Header.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired,
};

export default Header;
