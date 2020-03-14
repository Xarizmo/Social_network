import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      myPosts
      <div>
        New Post
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likeCounts='Likes - 15'/>
        <Post message={`It's my first post`} likeCounts='Likes - 20'/>
        <Post message='It is impossible!' likeCounts='Likes - 20'/>
        <Post message='Shut up and take my money!' likeCounts='Likes - 20'/>
      </div>
    </div>
  )
}

export default MyPosts;