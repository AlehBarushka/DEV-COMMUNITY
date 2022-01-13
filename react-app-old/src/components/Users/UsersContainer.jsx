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
	toggleIsFetchingAC,
} from '../../redux/users-reducer';

import Preloader from '../Common/Preloader';

class UsersContainer extends Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					users={this.props.users}
					onPageChanged={this.onPageChanged}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					isFetching={this.props.isFetching}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// toggleFollow: (userId) => {
// 		// 	dispatch(toggleFollowAC(userId));
// 		// },
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageAC(pageNumber));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		},
// 	};
// };

export default connect(mapStateToProps, {
	follow: followAC,
	unfollow: unfollowAC,
	setUsers: setUsersAC,
	setTotalUsersCount: setTotalUsersCountAC,
	setCurrentPage: setCurrentPageAC,
	toggleIsFetching: toggleIsFetchingAC,
})(UsersContainer);
