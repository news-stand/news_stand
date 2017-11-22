import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

function renderInput(inputProps) {
  const { classes, autoFocus, value, ref, ...other } = inputProps;

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

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
          <button type="submit" className="topics search btn">+</button>
          {renderInput({
            autoFocus: true,
            classes: 'topics search',
            placeholder: 'Search a topic',
            value: this.state.searchTerm,
            onChange: this.handleBarChange,
          })}
        </form>
      </div>
    );
  }
}

TopicsSearch.propTypes = {
  onTopicSearch: PropTypes.func.isRequired,
};

export default TopicsSearch;
