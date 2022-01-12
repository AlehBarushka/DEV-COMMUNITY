// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import {
	followAC,
	setUsersAC,
	unfollowAC,
	// eslint-disable-next-line no-unused-vars
	toggleFollowAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
} from '../../redux/users-reducer';
import UsersClassComponent from './UsersClassComponent';

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// toggleFollow: (userId) => {
		// 	dispatch(toggleFollowAC(userId));
		// },
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);

export default UsersContainer;
