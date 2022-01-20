const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
// const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	let stateCopy;
	switch (action.type) {
		// case TOGGLE_FOLLOW:
		// 	stateCopy = {
		// 		...state,
		// 		users: state.users.map((user) => {
		// 			if (user.id === action.userId) {
		// 				return { ...user, followed: !user.followed };
		// 			}
		// 			return user;
		// 		}),
		// 	};
		// 	return stateCopy;
		case FOLLOW:
			stateCopy = {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				}),
			};
			return stateCopy;

		case UNFOLLOW:
			stateCopy = {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}
					return user;
				}),
			};
			return stateCopy;

		case SET_USERS:
			stateCopy = {
				...state,
				users: action.users,
			};
			return stateCopy;

		case SET_TOTAL_USERS_COUNT:
			stateCopy = {
				...state,
				totalUsersCount: action.count,
			};
			return stateCopy;

		case SET_CURRENT_PAGE:
			stateCopy = {
				...state,
				currentPage: action.currentPage,
			};
			return stateCopy;

		case TOGGLE_IS_FETCHING:
			stateCopy = {
				...state,
				isFetching: action.isFetching,
			};
			return stateCopy;

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			stateCopy = {
				...state,
				followingInProgress: action.followingProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			};
			return stateCopy;

		default:
			return state;
	}
};

// export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId });

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });

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

export default usersReducer;
