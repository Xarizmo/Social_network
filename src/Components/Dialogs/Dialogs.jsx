import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Marina'},
    {id: 4, name: 'Miha'}
  ]
  
  let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Please call the police'},
    {id: 3, message: 'I wonder where you are..'},
    {id: 4, message: 'Push me! You can\'t just touch me!'}
  ]
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
      </div>
      <div className={s.messages}>
        <Message messageText={messagesData[0].message}/>
        <Message messageText={messagesData[1].message}/>
        <Message messageText={messagesData[2].message}/>
        <Message messageText={messagesData[3].message}/>
      </div>
    </div>
  )
}

export default Dialogs;