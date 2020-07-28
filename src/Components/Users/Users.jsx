import React from 'react';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";

let Users = ({ users, pageSize, totalUsersCount, currentPage, followingInProgress, onPageChanged, follow, unfollow }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  
  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={currentPage === p && s.selectedPage}
              onClick={() => onPageChanged(p)}
            >{p}
              </span>
          )
        })}
      </div>
      <div className={s.usersWrapper}>
        {users.map(u => {
          return (
            <div className={s.user} key={u.id}>
              <div className={s.userAvatarWrapper}>
                <NavLink to={'profile/' + u.id}>
                  <img className={s.userAvatar}
                       src={u.photos.small ? u.photos.small : "images/user-avatar.png"}
                       alt=""/>
                </NavLink>
                {
                  u.followed
                    ? <button
                      className={s.followBtn}
                      disabled={followingInProgress.some(id => id === u.id)}
                      onClick={() => unfollow(u.id)}>Unfollow</button>
                    : <button
                      className={s.followBtn}
                      disabled={followingInProgress.some(id => id === u.id)}
                      onClick={() => follow(u.id)}>Follow</button>
                }
              </div>
              <div className={s.userProfileWrapper}>
                <div className={s.userProfileInfo}>
                  <span className={s.userProfileName}>{u.name}</span>
                  <span>
                    <span>{"u.location.city"}, </span>
                    <span>{"u.location.country"}</span>
                  </span>
                </div>
                <div className={s.userProfileJob}>
                  <span>{"u.job"}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <button className={s.showBtn}>Show more</button>
    </div>
  );
}

export default Users;