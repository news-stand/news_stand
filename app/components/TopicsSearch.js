import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import NoteAddIcon from 'material-ui-icons/NoteAdd';

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
    this.props.setPreferences();
  }

  handleBarChange(event) {
    const { value } = event.target;
    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <div className="search">
        <form className="search" onSubmit={(event) => { this.onSearch(event); }} >
          {renderInput({
            autoFocus: true,
            classes: 'search',
            placeholder: 'Add search topic',
            value: this.state.searchTerm,
            onChange: this.handleBarChange,
          })}
          <button type="submit" className="add btn add-remove-btn">+</button>
        </form>
      </div>
    );
  }
}

TopicsSearch.propTypes = {
  onTopicSearch: PropTypes.func.isRequired,
};

export default TopicsSearch;

// <IconButton aria-label="Add a topic">
//   <NoteAddIcon />
// </IconButton>
