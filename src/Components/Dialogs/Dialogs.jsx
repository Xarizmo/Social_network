import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {
  
  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Message messageText={m.message} key={m.id}/>);
  let newMessageText = state.newMessageText;
  
  let onSendMessageClick = () => {
    props.sendMessage();
  }
  
  let onNewMessageTextChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessageText}
                      onChange={onNewMessageTextChange}
                      placeholder='Enter your message'>
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;