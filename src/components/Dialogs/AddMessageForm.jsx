import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddMessageForm = (props) => {
	const { sendMessage } = props;

	const addMessageValidation = Yup.object().shape({
		messageText: Yup.string()
			.required('Пожалуйста, введите сообщение!')
			.max(30, 'Максимальное кол-во символов 30!'),
	});

	const addMessage = (data) => {
		sendMessage(data.messageText);
	};

	const formik = useFormik({
		initialValues: {
			messageText: '',
		},
		onSubmit: addMessage,
		validationSchema: addMessageValidation,
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
			{formik.errors.messageText ? (
				<div>{formik.errors.messageText}</div>
			) : null}
			<button type='submit'>Add Message</button>
		</form>
	);
};

export default AddMessageForm;
