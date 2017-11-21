import React from 'react';

const Header = props => (
  <div className="header">
    <form>
      [News Stand Logo]
      Viewing {props.sortBy === 'popularity' ? 'most popular' : 'most recent'} news.
      <button type="button" className="btn btn-primary" onClick={props.onToggleClick}>{props.sortBy === 'popularity' ? 'View most recent' : 'View trending'} </button>
      <button type="button" className="btn btn-primary" onClick={props.onRefreshClick}>Refresh</button>
    </form>
  </div>
);

export default Header;
