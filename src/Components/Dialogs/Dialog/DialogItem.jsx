import React from 'react';
import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
  
  let path = '/dialogs/' + props.id;
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}