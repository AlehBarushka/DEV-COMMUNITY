const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

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

		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export default profileReducer;
