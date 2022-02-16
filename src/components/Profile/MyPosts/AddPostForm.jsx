import { useFormik } from 'formik';
import React from 'react';

const AddPostForm = (props) => {
	const { addPost } = props;

	const addNewPost = (data) => {
		addPost(data.postText);
	};

	const formik = useFormik({
		initialValues: {
			postText: '',
		},
		onSubmit: addNewPost,
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
			<br />
			<button type='submit'>Add Post</button>
		</form>
	);
};

export default AddPostForm;
