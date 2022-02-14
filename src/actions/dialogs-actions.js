import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from './constants';

export const sendMessageAC = () => ({
	type: SEND_MESSAGE,
});
export const updateNewMessageAC = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text,
});
