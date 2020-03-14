import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.onlinewebfonts.com/svg/img_452489.png" alt=""/>
      <span>{ props.message }</span>
      <button>Like!<span>{ props.likeCounts }</span></button>
    </div>
  );
}

export default Post;