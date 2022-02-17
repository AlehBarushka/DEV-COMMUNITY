import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginForm = () => {
	const signIn = (values) => {
		console.log(values);
	};

	const logInValidation = Yup.object().shape({
		login: Yup.string().required('Please enter the login'),
		password: Yup.string().required('Please enter the password'),
	});

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
			rememberMe: false,
		},
		onSubmit: signIn,
		validationSchema: logInValidation,
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
			{formik.errors.login ? <div>{formik.errors.login}</div> : null}
			<input
				type='password'
				name='password'
				placeholder='password'
				onChange={formik.handleChange}
				value={formik.values.password}
			/>
			<br />
			{formik.errors.password && formik.touched.password ? (
				<div>{formik.errors.password}</div>
			) : null}
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
