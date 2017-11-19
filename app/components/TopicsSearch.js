import React from 'react';

class TopicsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const { value } = event.target;
    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <div className="topics search">
        <form className="topics search">
          <input
            className="topics search"
            placeholder="Search a Topic"
            value={this.state.searchTerm}
            onChange={(event) => { this.handleSearchChange(event); }}
          />
          <button type="button" >Search</button>
        </form>
      </div>
    );
  }
}

export default TopicsSearch;
