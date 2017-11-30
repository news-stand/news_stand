import { Card, CardHeader, CardContent } from 'material-ui';
import React from 'react';
import moment from 'moment';

const Message = props => (
  <Card style={{ width: '66%', margin: '5px auto' }}>
  {console.log(props.message)}
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
