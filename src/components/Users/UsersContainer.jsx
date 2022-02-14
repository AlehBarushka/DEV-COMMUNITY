import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	followThunkCreator,
	getUsersThunkCreator,
	setCurrentPageAC,
	toggleFollowingProgressAC,
	unfollowThunkCreator,
} from '../../actions';

import Preloader from '../Common/Preloader';
import Users from './Users';

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
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

export default connect(mapStateToProps, {
	follow: followThunkCreator,
	unfollow: unfollowThunkCreator,
	setCurrentPage: setCurrentPageAC,
	toggleFollowingProgress: toggleFollowingProgressAC,
	getUsers: getUsersThunkCreator,
})(UsersContainer);
