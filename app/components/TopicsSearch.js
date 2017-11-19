import React from 'react';

class TopicsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.onTopicSearch = this.props.onTopicSearch;
    this.handleBarChange = this.handleBarChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();
    const value = this.state.searchTerm;
    this.setState({ searchTerm: '' });
    this.onTopicSearch(value);
  }

  handleBarChange(event) {
    const { value } = event.target;
    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <div className="topics search">
        <form className="topics search" onSubmit={(event) => { this.onSearch(event); }} >
          <input
            className="topics search"
            placeholder="Search a Topic"
            value={this.state.searchTerm}
            onChange={(event) => { this.handleBarChange(event); }}
          />
          <button type="submit" className="topics search button">Search</button>
        </form>
      </div>
    );
  }
}

export default TopicsSearch;
