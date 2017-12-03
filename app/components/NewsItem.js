import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { Card } from 'material-ui';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import defaultImage from '../public/assets/defaultImage';

import FavoriteButton from './FavoriteButton';
import MessageList from './MessageList';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      article: this.props.article,
      comments: [],
      comment: '',
      likes: 0,
    };
    this.clicked = this.clicked.bind(this);
    this.changeCommentState = this.changeCommentState.bind(this);
    this.clickedAdd = this.clickedAdd.bind(this);
  }
  componentDidMount() {
    axios.post('/messages', { articleTitle: this.state.article.title })
      .then((messages) => {
        this.setState({ comments: messages.data });
      })
      .catch((err) => {
        throw err;
      });
    axios.post('/likes', { articleTitle: this.state.article.title })
      .then((num) => {
        this.setState({ likes: parseInt(num.data) });
      })
      .catch((err) => {
        throw err;
      });
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
      addComment.push({ userName: this.props.user.username, message: input, img: this.props.user.profileImg});
      this.setState({
        comments: addComment,
        comment: '',
        clicked: true,
      });

      axios.post('/message', { message: input, articleTitle: this.state.article.title, userName: this.props.user.username, img: this.props.user.profileImg })
        .then((response) => {
          console.log('succesful add message', response);
        })
        .catch((err) => {
          console.log(err);
        });
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
        {
          this.props.loggedIn ?
            <FavoriteButton article={this.state.article} /> :
            <div className = "textalign">{'Likes: '+this.state.likes}</div>
        }
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
              <div>{moment(this.props.article.publishedAt).format('MMMM Do YYYY, h:mm a')}</div>
            </div> :
            <div>{this.props.article.publishedAt}</div>
        }

        {
          this.props.loggedIn ?
            this.state.clicked ?
              <div>
                <Button raised color="primary" style={{ width: '100%' }} onClick={this.clicked}>Hide Comments ({this.state.comments.length})</Button>
              </div> :
              <div>

                <Button raised color="primary" style={{ width: '100%' }} onClick={this.clicked}>Show Comments ({this.state.comments.length})</Button>
              </div> :
              this.state.clicked ?
                <div>
                  <Button raised color="primary" style={{ width: '100%' }} onClick={this.clicked}>Hide Comments ({this.state.comments.length})</Button>
                </div> :
                <div>
                  <Button raised color="primary" style={{ width: '100%' }} onClick={this.clicked}>Show Comments ({this.state.comments.length})</Button>
                </div>
        }
        {
          this.state.clicked ?
            <div>
              { this.props.loggedIn &&
                <Card style={{ width: '100%', height: '75px', margin: '5px auto' }}>
                  <img className="profile-pic" src={this.props.user.profileImg} />
                  <Input
                    disableUnderline="true"
                    style={{ margin: '10px' }}
                    placeholder="Add a comment..."
                    inputProps={{
                      'aria-label': 'Description',
                    }}
                    onChange={this.changeCommentState}
                  />
                  <Button style={{ left: '25%' }} raised color="primary"onClick={this.clickedAdd}>Post</Button>
                </Card> }
              <MessageList messages={this.state.comments.reverse()} />
            </div> :
          null
        }

        <br />
      </div>
    );
  }
}


NewsItem.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
    author: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};


export default NewsItem;
