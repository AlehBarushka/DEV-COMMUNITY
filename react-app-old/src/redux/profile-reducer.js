import { profileAPI, usersAPI } from '../api/api';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	postsData: [
		{
			id: 1,
			message: 'Hi, how are you?',
			likesCount: 15,
		},
		{
			id: 2,
			message: "It's my first post are you?",
			likesCount: 20,
		},
	],
	newPostText: '',
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	let stateCopy;
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			};
			stateCopy = {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: '',
			};
			return stateCopy;
		}

		case UPDATE_NEW_POST_TEXT:
			stateCopy = { ...state, newPostText: action.newText };
			return stateCopy;

		case SET_USER_PROFILE:
			stateCopy = { ...state, profile: action.profile };
			return stateCopy;

		case SET_STATUS:
			stateCopy = { ...state, status: action.status };
			return stateCopy;

		default:
			return state;
	}
};

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

export default profileReducer;
