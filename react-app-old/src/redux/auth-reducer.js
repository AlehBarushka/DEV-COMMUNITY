import { authAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

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

export const setAuthUserDataAC = (userId, email, login) => ({
	type: SET_AUTH_USER_DATA,
	data: { userId, email, login },
});

export const getAuthUserDataThunkCreator = () => {
	return (dispatch) => {
		authAPI.getAuth().then((response) => {
			if (response.resultCode === 0) {
				let { id, email, login } = response.data;
				dispatch(setAuthUserDataAC(id, email, login));
			}
		});
	};
};

export default authReducer;
