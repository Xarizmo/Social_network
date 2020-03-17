import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 2},
    {id: 3, message: 'It is impossible!', likesCount: 5},
    {id: 4, message: 'Shut up and take my money!', likesCount: 1222}
  ]
  
  return (
    <div>
      myPosts
      <div>
        New Post
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
        <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;