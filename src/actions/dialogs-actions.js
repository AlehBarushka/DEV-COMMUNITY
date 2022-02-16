import { SEND_MESSAGE } from './constants';

export const sendMessageAC = (messageText) => ({
	type: SEND_MESSAGE,
	payload: messageText,
});
