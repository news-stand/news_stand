import React from 'react';
import { Card } from 'material-ui';
import Message from './Message';


const MessageList = props => (
  <Card>
    {props.messages.map((item, index) => <Message message={item} key={index} />)}
  </Card>
);

export default MessageList;
