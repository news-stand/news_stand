import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="header">
    <form>
      [News Stand Logo]
      Viewing {props.sortBy === 'popularity' ? 'most popular' : 'most recent'} news.
      <button type="button" className="btn btn-primary" onClick={props.onToggleClick}>{props.sortBy === 'popularity' ? 'View most recent' : 'View trending'} </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.onRefreshClick}
      >Refresh
      </button>
    </form>
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
