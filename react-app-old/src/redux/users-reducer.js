const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
// const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [],
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
				users: [...state.users, ...action.users],
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

export default usersReducer;
