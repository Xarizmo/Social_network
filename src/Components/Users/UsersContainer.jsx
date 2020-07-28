import React, { Component } from 'react';
import {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  changePage, follow, unfollow
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import { Puff } from 'svg-loaders-react';

class UsersContainer extends Component {
  
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  
  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber, this.props.pageSize);
  }
  
  render() {
    return (
      <>
        {this.props.isFetching ? <Puff stroke="#999999"/> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
};

export default connect(mapStateToProps,
  { followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    changePage,
    follow,
    unfollow,
  })(UsersContainer);

