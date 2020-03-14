import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.onlinewebfonts.com/svg/img_452489.png" alt=""/>
      <span>{props.message}</span>
      <button>Like!</button>
      <br/>
      <span>{props.likeCounts}</span>
    </div>
  )
}

export default Post;