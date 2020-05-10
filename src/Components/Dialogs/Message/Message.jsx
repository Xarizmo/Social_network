import React from 'react';
import styles from './Message.module.css';

export const Message = (props) => {
  return (
    <div>
      <div className={styles.message}>{props.messageText}</div>
    </div>
  )
}