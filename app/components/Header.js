import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="header">
    <form>
      <img src="https://i.imgur.com/mCSoavu.png" alt="news stand" className="logo" />
      Viewing {props.sortBy === 'popularity' ? 'most popular' : 'most recent'} news.

      <button
        type="button"
        className="btn btn-primary btn-refresh"
        onClick={props.onRefreshClick}>Refresh
      </button>
      <button type="button" className="btn btn-primary" onClick={props.onToggleClick}>{props.sortBy === 'popularity' ? 'View most recent' : 'View trending'} </button>

    </form>
    <nav>
      <div className="nav-bar">
        <Link to="/profile">Profile</Link>
      </div>
      <div className="nav-bar">
        <Link to="/login">Login</Link>
      </div>
      <div className="nav-bar">
        <a href="/auth/logout">Logout</a>
      </div>
    </nav>
  </div>
);

Header.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired,
};

export default Header;
