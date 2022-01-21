import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	// eslint-disable-next-line no-unused-vars
	toggleFollowAC,
	setCurrentPageAC,
	toggleFollowingProgressAC,
	getUsersThunkCreator,
	unfollowThunkCreator,
	followThunkCreator,
} from '../../redux/users-reducer';

import Preloader from '../Common/Preloader';

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);

		//moved to reducer
		// this.props.toggleIsFetching(true);
		// usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
		// 	this.props.toggleIsFetching(false);
		// 	this.props.setUsers(response.items);
		// 	this.props.setTotalUsersCount(response.totalCount);
		// });
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);

		// this.props.setCurrentPage(pageNumber);
		// this.props.toggleIsFetching(true);
		// usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
		// 	this.props.toggleIsFetching(false);
		// 	this.props.setUsers(response.items);
		// });
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users {...this.props} onPageChanged={this.onPageChanged} />
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
		followingInProgress: state.usersPage.followingInProgress,
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
	follow: followThunkCreator,
	unfollow: unfollowThunkCreator,
	setCurrentPage: setCurrentPageAC,
	toggleFollowingProgress: toggleFollowingProgressAC,
	getUsers: getUsersThunkCreator,
})(UsersContainer);
