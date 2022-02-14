import { SET_AUTH_USER_DATA } from '../actions/constants';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	let stateCopy;

	switch (action.type) {
		case SET_AUTH_USER_DATA:
			stateCopy = { ...state, ...action.data, isAuth: true };
			return stateCopy;

		default:
			return state;
	}
};

export default authReducer;
