import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
  
  // создаем ссылку на элемент при помощи встроенных методов React
  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };
  
  return (
    <div>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        New Post
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;