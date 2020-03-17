import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 2},
    {id: 3, message: 'It is impossible!', likesCount: 5},
    {id: 4, message: 'Shut up and take my money!', likesCount: 122}
  ]
  
  let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
  
  return (
    <div>
      myPosts
      <div>
        New Post
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;