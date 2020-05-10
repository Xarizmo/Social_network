import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator())
  }
  
  let onNewMessageTextChange = (body) => {
    props.store.dispatch(updateNewMessageTextActionCreator(body))
  }
  
  return (
    <Dialogs
      updateNewMessageText={onNewMessageTextChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer;