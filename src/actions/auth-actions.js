import { authAPI } from '../api/api';

import { SET_AUTH_USER_DATA } from './constants';

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
