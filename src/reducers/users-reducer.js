import {
	FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	UNFOLLOW,
} from '../actions/constants';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
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

export default usersReducer;
