import React from 'react';
import Message from './Message.js';

const MessageList = props => (
  <div>
    {props.messages.map((item, index) => <Message message={item} key={index} />)}
  </div>
);

export default MessageList;
