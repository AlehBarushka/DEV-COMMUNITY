// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { followAC, setUsersAC, unfollowAC, toggleFollowAC } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
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
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
