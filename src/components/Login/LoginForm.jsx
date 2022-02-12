import { Field, Form, Formik } from 'formik';
import React from 'react';

const LoginForm = (props) => {
	const signIn = (values) => {
		console.log(values);
	};

	return (
		<Formik initialValues={{ email: '', password: '', checked: false }} onSubmit={signIn}>
			{({ errors, touched }) => (
				<Form>
					<label htmlFor='email'>Email</label>
					<Field type='text' name='email' placeholder='email' />
					{errors.email && <div>{errors.email}</div>}
					<label htmlFor='password'>Password</label>
					<Field type='password' name='password' placeholder='password' />
					{touched.password && errors.password && <div>{errors.password}</div>}
					<label htmlFor='checked'>Remember me</label>
					<Field type='checkbox' name='checked' placeholder='password' />
					<button type='submit'>Войти</button>
				</Form>
			)}
		</Formik>
		// <>
		// 	<form>
		// 		<div>
		// 			<input type='text' placeholder='Login' />
		// 		</div>
		// 		<div>
		// 			<input type='text' placeholder='Password' />
		// 		</div>
		// 		<div>
		// 			<input type='checkbox' /> Remember me
		// 		</div>
		// 		<div>
		// 			<button>Login</button>
		// 		</div>
		// 	</form>
		// </>
	);
};

export default LoginForm;
