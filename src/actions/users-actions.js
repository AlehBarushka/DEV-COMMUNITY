import { usersAPI } from '../api/api';
import {
	FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	UNFOLLOW,
} from './constants';

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });

// export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setTotalUsersCountAC = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount,
});

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });

export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });

export const toggleFollowingProgressAC = (followingProgress, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	followingProgress,
	userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetchingAC(true));
		usersAPI.getUsers(currentPage, pageSize).then((response) => {
			dispatch(toggleIsFetchingAC(false));
			dispatch(setUsersAC(response.items));
			dispatch(setTotalUsersCountAC(response.totalCount));
		});
	};
};

export const followThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgressAC(true, userId));
		usersAPI.follow(userId).then((response) => {
			if (response.resultCode === 0) {
				dispatch(followAC(userId));
			}
			dispatch(toggleFollowingProgressAC(false, userId));
		});
	};
};

export const unfollowThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgressAC(true, userId));
		usersAPI.unfollow(userId).then((response) => {
			if (response.resultCode === 0) {
				dispatch(unfollowAC(userId));
			}
			dispatch(toggleFollowingProgressAC(false, userId));
		});
	};
};
