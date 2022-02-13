import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);

	return isAuth ? (
		<Navigate to='/' />
	) : (
		<>
			<h1>Login</h1>
			<LoginForm />
		</>
	);
};

export default Login;
