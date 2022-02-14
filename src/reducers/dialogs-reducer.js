import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from '../actions/constants';

let initialState = {
	dialogsData: [
		{
			id: 1,
			name: 'Oleg',
		},
		{
			id: 2,
			name: 'Alexander',
		},
		{
			id: 3,
			name: 'Sveta',
		},
		{
			id: 4,
			name: 'Dmitriy',
		},
		{
			id: 5,
			name: 'Dina',
		},
		{
			id: 6,
			name: 'Sandra',
		},
	],
	messagesData: [
		{
			id: 1,
			message: 'Hi!',
		},
		{
			id: 2,
			message: 'How are you?',
		},
		{
			id: 3,
			message: 'Bitch!',
		},
		{
			id: 4,
			message: 'Hello!',
		},
		{
			id: 5,
			message: 'Yo!',
		},
		{
			id: 6,
			message: 'I am robot',
		},
	],
	newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
	let stateCopy;

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			stateCopy = { ...state, newMessageText: action.newText };
			return stateCopy;

		case SEND_MESSAGE:
			let newText = state.newMessageText;
			let newMessage = {
				id: 7,
				message: newText,
			};
			stateCopy = {
				...state,
				messagesData: [...state.messagesData, newMessage],
				newMessageText: '',
			};
			return stateCopy;

		default:
			return state;
	}
};

export default dialogsReducer;
