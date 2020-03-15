import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name='Серёжка!' id='1'/>
        <DialogItem name='Дима' id='2'/>
        <DialogItem name='Света' id='3'/>
        <DialogItem name='Марина' id='4'/>
        <DialogItem name='Геннадий Петрович' id='5'/>
        <DialogItem name='Какой-то мужик' id='6'/>
      </div>
      <div className={s.messages}>
        <Message messageText='Hello everybody!'/>
        <Message messageText='Hi!'/>
        <Message messageText='Shut up and take my money!'/>
        <Message messageText='Wild wild west!'/>
      </div>
    </div>
  )
}

export default Dialogs;