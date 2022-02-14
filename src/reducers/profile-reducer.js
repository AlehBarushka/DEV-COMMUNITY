import { ADD_POST, SET_STATUS, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT } from '../actions/constants';

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

export default profileReducer;
