import React from 'react';
import { Navigate } from 'react-router-dom';

import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	const { dialogsPage, isAuth, sendMessage, onMessageChange } = props;

	let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	));

	let messagesElements = dialogsPage.messagesData.map((messages) => (
		<Message message={messages.message} id={messages.id} key={messages.id} />
	));

	let newMessage = dialogsPage.newMessageText;

	const addMessage = () => {
		sendMessage();
	};

	const messageChange = (e) => {
		let newText = e.target.value;
		onMessageChange(newText);
	};

	if (!isAuth) return <Navigate to='/login' />;

	return (
		<div className={styles.dialogs}>
			<div className={styles['dialog-items']}>{dialogsElements}</div>
			<div className={styles.messages}>{messagesElements}</div>
			<textarea value={newMessage} onChange={messageChange} placeholder='enter your message'></textarea>
			<div>
				<button onClick={addMessage}>Add Message</button>
			</div>
		</div>
	);
};

export default Dialogs;
