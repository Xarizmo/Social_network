import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        
        let onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator())
        }
        
        let onNewMessageTextChange = (body) => {
          store.dispatch(updateNewMessageTextActionCreator(body))
        }
        
        return (
          <Dialogs
            updateNewMessageText={onNewMessageTextChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        )
      }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;