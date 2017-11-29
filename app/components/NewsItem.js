import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../public/assets/defaultImage';

import FavoriteButton from './FavoriteButton';
import MessageList from './MessageList';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      article: this.props.article,
      comments: [{ name: 'Aman', text: 'hello' }, { name: 'Beast', text: 'Cant wait to finish' }, { name: 'Aman', text: 'Getting There' }],
      comment: '',
    };
    this.clicked = this.clicked.bind(this);
    this.changeCommentState = this.changeCommentState.bind(this);
    this.clickedAdd = this.clickedAdd.bind(this);
  }
  clicked() {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  }
  changeCommentState(e) {
    this.setState({ comment: e.target.value });
  }
  clickedAdd() {
    if (this.state.comment !== '') {
      const addComment = this.state.comments;
      const input = this.state.comment;
      addComment.push({ name: 'RandomFix', text: input });
      this.setState({ comments: addComment });
      this.setState({ comment: '' });
    }
  }
  render() {
    return (
      <div className="newsItem">
        {
          this.state.article.urlToImage ?
            <a href={this.state.article.url} target="_blank">
              <img src={this.state.article.urlToImage} className="articleImg" alt="#" />
            </a>
            :
            <a href={this.state.article.url} target="_blank">
              <img src={defaultImage} className="defaultImg" alt="#" />
            </a>
        }
        <FavoriteButton article={this.state.article} />
        {
          this.state.article.title ?
            <a href={this.state.article.url} target="_blank">
              <h3 className="articleTitle"> {this.state.article.title} </h3>
            </a>
            :
            null
        }

        {
          this.state.article.description ?
            <p className="articleDescription">{this.state.article.description}</p> :
            null
        }

        {
          this.state.article.source.name ?
            <div className="articleSource">{this.state.article.source.name} {
              this.state.article.author ?
                <p className="articleAuthor">| {this.state.article.author}</p> :
            null}
            </div> :
            null
        }

        {
          this.state.clicked ?
            <MessageList messages={this.state.comments} /> :
          null
        }

        {
          this.props.loggedIn ?
            this.state.clicked ?
              <div>
                <Input
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                  onChange={this.changeCommentState}
                />
                <Button raised onClick={this.clicked}>Hide Comments</Button>
                <Button raised onClick={this.clickedAdd}>Add Comment</Button>
              </div> :
              <div>
                <Input
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                  onChange={this.changeCommentState}
                />
                <Button raised onClick={this.clicked}>See Comments</Button>
                <Button raised onClick={this.clickedAdd}>Add Comment</Button>
              </div> :
              this.state.clicked ?
                <div>
                  <Input
                    inputProps={{
                      'aria-label': 'Description',
                    }}
                    onChange={this.changeCommentState}
                  />
                  <Button raised onClick={this.clicked}>Hide Comments</Button>
                </div> :
                <div>
                  <Input
                    inputProps={{
                      'aria-label': 'Description',
                    }}
                    onChange={this.changeCommentState}
                  />
                  <Button raised onClick={this.clicked}>See Comments</Button>
                </div>
        }

        <br />
      </div>
    );
  }
}


// NewsItem.propTypes = {
//   article: PropTypes.shape({
//     urlToImage: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     source: PropTypes.shape({
//       name: PropTypes.string,
//     }),
//     author: PropTypes.string,
//     url: PropTypes.string.isRequired,
//   }).isRequired,
// };


export default NewsItem;
