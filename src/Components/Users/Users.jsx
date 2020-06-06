import React, {Component} from "react";
import s from './Users.module.css';
import * as axios from 'axios';

export default class Users extends Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  
  render() {
    return (
      <div>
        <div className={s.usersWrapper}>
          {this.props.users.map(u => {
            return (
              <div className={s.user} key={u.id}>
                <div className={s.userAvatarWrapper}>
                  <img className={s.userAvatar}
                       src={u.photos.small ? u.photos.small : "images/user-avatar.png"}
                       alt=""/>
                  {
                    u.followed
                      ? <button className={s.followBtn} onClick={() => {
                        this.props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button className={s.followBtn} onClick={() => {
                        this.props.follow(u.id)
                      }}>Follow</button>
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
}
