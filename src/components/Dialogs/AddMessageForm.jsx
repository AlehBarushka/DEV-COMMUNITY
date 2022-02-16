import React from 'react';
import { useFormik } from 'formik';

const AddMessageForm = (props) => {
	const { sendMessage } = props;

	const addMessage = (data) => {
		sendMessage(data.messageText);
	};

	const formik = useFormik({
		initialValues: {
			messageText: '',
		},
		onSubmit: addMessage,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<textarea
				rows='4'
				cols='30'
				onChange={formik.handleChange}
				value={formik.values.messageText}
				name='messageText'
				placeholder='add message...'
			/>
			<button type='submit'>Add Message</button>
		</form>
	);
};

export default AddMessageForm;
