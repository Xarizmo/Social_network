import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return <div className={s.content}>
    <div className={s.content_top_bg}>
    </div>
    <div>
      ava+description
    </div>
    <MyPosts/>
  </div>
}

export default Profile;