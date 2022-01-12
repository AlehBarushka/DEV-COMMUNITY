// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import {
	followAC,
	setUsersAC,
	unfollowAC,
	// eslint-disable-next-line no-unused-vars
	toggleFollowAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
} from '../../redux/users-reducer';

class UsersContainer extends Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				onPageChanged={this.onPageChanged}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
			/>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
