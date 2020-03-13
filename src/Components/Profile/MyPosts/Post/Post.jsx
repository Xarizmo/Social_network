import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://cdn.onlinewebfonts.com/svg/img_452489.png" alt=""/>
      <span>post1</span>
      <button>Like!</button>
    </div>
  );
}

export default Post;