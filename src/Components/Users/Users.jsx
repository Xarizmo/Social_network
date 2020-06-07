import React, {Component} from "react";
import s from './Users.module.css';
import * as axios from 'axios';

export default class Users extends Component {
  
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                className={this.props.currentPage === p && s.selectedPage}
                onClick={() => this.onPageChanged(p)}
              >{p}
              </span>
            )
          })}
        </div>
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
