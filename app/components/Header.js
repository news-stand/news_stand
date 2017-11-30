import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="header">
    <form>
      <img src="https://i.imgur.com/mCSoavu.png" alt="news stand" className="logo" />

      <div className="viewing">
        <p> Viewing {props.sortBy === 'popularity' ? 'most popular' : 'most recent'} news.</p>

        <button type="button" className="btn btn-primary" onClick={props.onToggleClick}>{props.sortBy === 'popularity' ? 'View most recent' : 'View trending'} </button>
      </div>

      <div className="divider"></div>

      <div className="refresh">
        <button
          type="button"
          className="btn btn-primary btn-refresh"
          onClick={props.onRefreshClick}
        >Refresh
        </button>
      </div>

    </form>
    <nav>
      {!props.loggedIn ?
        <div className="nav-bar">
          <Link to="/login">Login</Link>
        </div>
        :
        <div className="nav-bar">
          <Link to="/profile">Profile</Link>
          <div className="nav-bar">
            <a href="/auth/logout">Logout</a>
          </div>
          <div className="nav-bar">
            {props.user.username ? <span>Welcome back {props.user.username.split(' ')[0]}!</span> : null}
          </div>
        </div>
      }
    </nav>
  </div>
);

Header.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired,
};

export default Header;
