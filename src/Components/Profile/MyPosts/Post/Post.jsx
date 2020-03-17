import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.onlinewebfonts.com/svg/img_452489.png" alt=""/>
      <span>{props.message}</span>
      <br/>
      <button>Like!</button>
      <span>{props.likesCount}</span>
    </div>
  )
}

export default Post;