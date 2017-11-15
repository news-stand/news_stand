import React from 'react';
import Header from './Header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello World!
        <Header />
      </div>

    );
  }
}

export default App;
