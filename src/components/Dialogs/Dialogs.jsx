import React from 'react';
import { Navigate } from 'react-router-dom';

import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {
	const { dialogsPage, isAuth, sendMessage } = props;

	if (!isAuth) return <Navigate to='/login' />;

	let dialogsElements = dialogsPage.dialogsData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	));

	let messagesElements = dialogsPage.messagesData.map((messages) => (
		<Message message={messages.message} id={messages.id} key={messages.id} />
	));

	return (
		<div className={styles.dialogs}>
			<div className={styles['dialog-items']}>{dialogsElements}</div>
			<div className={styles.messages}>{messagesElements}</div>
			<AddMessageForm sendMessage={sendMessage} />
		</div>
	);
};

export default Dialogs;
