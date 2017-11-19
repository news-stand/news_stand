import React from 'react';

class TopicsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.handleBarChange = this.handleBarChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();
  }

  handleBarChange(event) {
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
            onChange={(event) => { this.handleBarChange(event); }}
          />
          <button type="button" >Search</button>
        </form>
      </div>
    );
  }
}

export default TopicsSearch;
