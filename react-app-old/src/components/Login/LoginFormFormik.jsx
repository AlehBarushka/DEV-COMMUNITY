import { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
// import { authAPI } from '../../api/api';

class LoginFormFormik extends Component {
	render() {
		const validationsSchema = yup
			.object()
			.shape({ email: yup.string().typeError('Должно быть строкой').required('Обязательно') });
		return (
			<Formik
				initialValues={{
					email: '',
					password: '',
					rememberMe: false,
				}}
				validateOnBlur
				validationSchema={validationsSchema}
				onSubmit={(values) => console.log(values)}
			>
				{({ values, errors, touched, handleBlur, handleChange, isValid, handleSubmit, dirty }) => {
					return (
						<div>
							<p>
								<input
									placeholder='Email'
									type='text'
									name='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
							</p>
							{touched.email && errors.email && <p>{errors.email}</p>}
							<p>
								<input
									placeholder='Password'
									type='text'
									name='password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
							</p>
							{touched.password && errors.password && <p>{errors.password}</p>}
							<p>
								<label htmlFor='rememberMe'>Remember Me</label>
								<input type='checkbox' name='rememberMe' onChange={handleChange} value={values.rememberMe} />
							</p>
							<button disabled={!isValid && !dirty} onClick={handleSubmit} type='submit'>
								Отправить
							</button>
						</div>
					);
				}}
			</Formik>
		);
	}
}

export default LoginFormFormik;
