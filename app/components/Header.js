import React from 'react';
// import ReactDOM from 'react-dom';

const Header = (props) => (
  <div>
    <form>
      [News Stand Logo]
      <button type="button" onClick={props.onToggleClick}>Toggle</button>
      <button type="button" onClick={props.onRefreshClick}>Refresh</button>
    </form>
  </div>
);

export default Header;
