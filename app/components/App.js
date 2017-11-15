import React from 'react';
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onRefreshClick() {
    // trigger get request to server
  }

  onToggleClick() {
    // invert article-view state
  }

  render() {
    return (
      <div>
        Hello World!
        <Header onRefreshClick={this.onRefreshClick} onToggleClick={this.onToggleClick} />
      </div>
    );
  }
}

export default App;
