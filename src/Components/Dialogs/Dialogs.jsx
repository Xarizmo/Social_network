import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
      <div className={s.dialogs}>
        <div className={s.dialogs_items}>
          <div className={s.dialog + ' ' + s.active}>Дима</div>
          <div className={s.dialog}>Коля</div>
          <div className={s.dialog}>Света</div>
          <div className={s.dialog}>Маша</div>
          <div className={s.dialog}>Петрович</div>
          <div className={s.dialog}>Еще какой-то мужик</div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Yo!</div>
          <div className={s.message}>Hello!</div>
        </div>
      </div>
    )
}

export default Dialogs;