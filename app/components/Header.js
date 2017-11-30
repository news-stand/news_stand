import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUser } from '../actions/index';


class Header extends Component {
  constructor(props) {
    super(props);

    this.onProfileClick = this.onProfileClick.bind(this);
  }

  onProfileClick() {
    console.log('was clicked');
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="header">
        <form>
          <img src="https://i.imgur.com/mCSoavu.png" alt="news stand" className="logo" />

          <div className="viewing">
            <p> Viewing {this.props.sortBy === 'popularity' ? 'most popular' : 'most recent'} news.</p>

            <button type="button" className="btn btn-primary" onClick={this.props.onToggleClick}>{this.props.sortBy === 'popularity' ? 'View most recent' : 'View trending'} </button>
          </div>

          <div className="divider"></div>

          <div className="refresh">
            <button
              type="button"
              className="btn btn-primary btn-refresh"
              onClick={this.props.onRefreshClick}
            >Refresh
            </button>
          </div>

        </form>
        <nav>
          <div className="nav-bar">
            <Link to="/profile" onClick={this.onProfileClick} >Profile</Link>
          </div>
          {!this.props.loggedIn ? 
            <div className="nav-bar">
              <Link to="/login">Login</Link>
            </div>
            :
            <div className="nav-bar">
              <div className="nav-bar">
                <a href="/auth/logout">Logout</a>
              </div>
              <div className="nav-bar">
                {this.props.user.username ? <span>Welcome back {this.props.user.username.split(' ')[0]}!</span> : null}
              </div>
            </div>
          }
        </nav>
      </div>
    );
  }

}
    Header.propTypes = {
      sortBy: PropTypes.string.isRequired,
      onToggleClick: PropTypes.func.isRequired,
      onRefreshClick: PropTypes.func.isRequired,
    };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
