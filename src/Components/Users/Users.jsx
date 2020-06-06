import React from "react";
import s from './Users.module.css';

let Users = ({users, follow, unfollow, setUsers}) => {

  if (users.length === 0) {
    setUsers(
      [
        {id: 1, followed: true, fullName: 'Dennis Jr.', job: 'Senior React developer', location: {country: 'USA', city: 'NY'}},
        {id: 2, followed: false, fullName: 'Margarita Ivanova', job: 'Senior React developer', location: {country: 'Russia', city: 'Moscow'}},
        {id: 3, followed: true, fullName: 'Dmitry Kiselev', job: 'Senior React developer', location: {country: 'Belarus', city: 'Minsk'}},
        {id: 4, followed: false, fullName: 'Ivan Dzyatko', job: 'Senior React developer', location: {country: 'Ukraine', city: 'Kiev'}}
      ]
    )
  }
  
  return (
    <div>
      <div className={s.usersWrapper}>
        {users.map(u => {
          return (
            <div className={s.user} key={u.id}>
              <div className={s.userAvatarWrapper}>
                <img className={s.userAvatar} src="images/user-avatar.png" alt=""/>
                {
                  u.followed
                    ? <button className={s.followBtn} onClick={() => {unfollow(u.id)}}>Unfollow</button>
                    : <button className={s.followBtn} onClick={() => {follow(u.id)}}>Follow</button>
                }
              </div>
              <div className={s.userProfileWrapper}>
                <div className={s.userProfileInfo}>
                  <span className={s.userProfileName}>{u.fullName}</span>
                  <span>
                    <span>{u.location.city}, </span>
                    <span>{u.location.country}</span>
                  </span>
                </div>
                <div className={s.userProfileJob}>
                  <span>{u.job}</span>
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