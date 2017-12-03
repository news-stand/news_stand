import { Card, CardHeader, CardContent, CardMedia } from 'material-ui';
import React from 'react';
import moment from 'moment';

const Message = props => (
  <Card style={{ width: '100%', margin: '5px auto' }}>
    <img className="profile-pic" src={props.message.img}/>
    <CardHeader
      subheader={moment(props.message.date).fromNow()}
      title={props.message.userName}
    />
    <CardContent>{props.message.message}</CardContent>
  </Card>
);

export default Message;


  // <Card style={{ width: '66%', margin: '5px auto' }}>
  //   <CardHeader
  //     title={props.message.name}
  //     subtitle={props.message.timestamp}
  //   />
  //   <CardText>{props.message.text}</CardText>
  // </Card>
