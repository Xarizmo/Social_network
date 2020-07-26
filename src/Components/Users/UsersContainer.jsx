import React, {Component} from 'react';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow } from '../../redux/usersReducer';
import {connect} from 'react-redux';
import Users from './Users';
import { Puff } from 'svg-loaders-react';
import { usersAPI } from '../../api/api';

class UsersAPIContainer extends Component {
  
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  }
  
  render() {
    return (
      <>
        { this.props.isFetching ? <Puff stroke="#999999" /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
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
    isFetching: state.usersPage.isFetching
  }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIContainer);

