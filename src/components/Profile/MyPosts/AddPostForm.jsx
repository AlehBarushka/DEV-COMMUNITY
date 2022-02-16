import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const AddPostForm = (props) => {
	const { addPost } = props;

	const addNewPost = (data) => {
		addPost(data.postText);
	};

	const addPostValidation = Yup.object().shape({
		postText: Yup.string()
			.required('Пожалуйста, введите сообщение!')
			.max(30, 'Максимальное кол-во символов 30!'),
	});

	const formik = useFormik({
		initialValues: {
			postText: '',
		},
		onSubmit: addNewPost,
		validationSchema: addPostValidation,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<textarea
				rows='4'
				cols='30'
				onChange={formik.handleChange}
				value={formik.values.postText}
				name='postText'
				placeholder='add post...'
			/>
			{formik.errors.postText ? <div>{formik.errors.postText}</div> : null}
			<br />
			<button type='submit'>Add Post</button>
		</form>
	);
};

export default AddPostForm;
