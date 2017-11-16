import React from 'react';

const Header = (props) => (
  <div>
    <form>
      [News Stand Logo]
      Viewing {props.mostPopular ? 'most popular' : 'most recent'} news.
      <button type="button" onClick={props.onToggleClick}>{props.mostPopular ? 'View most recent' : 'View trending'} </button>
      <button type="button" onClick={props.onRefreshClick}>Refresh</button>
    </form>
  </div>
);

export default Header;
