import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  
  let newMessage = React.createRef();
  
  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }
  
  return (
    <div>
      <div className={s.message}>{props.messageText}</div>
      <div>
        <textarea ref={newMessage}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  )
}

export default Message;