import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <div className={s.content_top_bg}>
      </div>
      <div>
        ava+description
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;