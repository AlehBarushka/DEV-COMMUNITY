import { useFormik } from 'formik';
import React from 'react';

const LoginForm = () => {
	const signIn = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
			rememberMe: false,
		},
		onSubmit: signIn,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<input
				type='text'
				onChange={formik.handleChange}
				value={formik.values.login}
				name='login'
				placeholder='login'
			/>
			<br />
			<input
				type='password'
				name='password'
				placeholder='password'
				onChange={formik.handleChange}
				value={formik.values.password}
			/>
			<br />
			<label htmlFor='rememberMe'>Remember me</label>
			<input
				type='checkbox'
				name='rememberMe'
				onChange={formik.handleChange}
				value={formik.values.rememberMe}
			/>
			<br />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default LoginForm;
