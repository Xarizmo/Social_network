import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Marina'},
    {id: 4, name: 'Mikhail'}
  ];
  
  let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Please call the police'},
    {id: 3, message: 'I wonder where you are..'},
    {id: 4, message: 'Push me! You cant just touch me!'}
  ];
  
  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  
  let messagesElements = messages.map(m => <Message messageText={m.message}/>);
  
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