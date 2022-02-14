import { profileAPI, usersAPI } from '../api/api';
import { ADD_POST, SET_STATUS, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT } from './constants';

export const addPostAC = () => ({ type: ADD_POST });

export const updateNewPostTextAC = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile: profile });

export const setStatusAC = (status) => ({
	type: SET_STATUS,
	status: status,
});

export const getUserProfileThunkCreator = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId).then((response) => {
			dispatch(setUserProfileAC(response));
		});
	};
};

export const getUserStatusThunkCreator = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then((response) => {
			dispatch(setStatusAC(response));
		});
	};
};

export const updateUserStatusThunkCreator = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(setStatusAC(status));
			}
		});
	};
};
