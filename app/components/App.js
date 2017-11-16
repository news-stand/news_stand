import React from 'react';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostPopular: true,
    };

    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onRefreshClick() {
    // trigger get request to server '/load' route
  }

  onToggleClick() {
    this.setState({mostPopular: !this.state.mostPopular});
    // trigger get request to server to '/popular' or '/recent' routes as necessary
  }

  render() {
    return (
      <div>
        Hello World!
        <Header onRefreshClick={this.onRefreshClick} onToggleClick={this.onToggleClick} mostPopular={this.state.mostPopular} />
      </div>
    );
  }
}

export default App;
