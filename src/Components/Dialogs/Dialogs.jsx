import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  
  let messagesElements = props.state.messages.map(m => <Message messageText={m.message}/>);
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;