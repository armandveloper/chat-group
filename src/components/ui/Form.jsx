import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Lock, User } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import { AuthContext } from '../../context/AuthContext';
import Loader from './Loader';

const registerInitialValues = {
	name: '',
	email: '',
	password: '',
};

const RegisterSchema = Yup.object().shape({
	name: Yup.string().required('Your Name is Required'),
	email: Yup.string()
		.email('A valid email is required')
		.required("Email can't be empty"),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Password is required'),
});

const loginInitialValues = {
	email: '',
	password: '',
};

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('A valid email is required')
		.required("Email can't be empty"),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Password is required'),
});

function Form({ type }) {
	const { register, login } = useContext(AuthContext);
	const [uiState] = useContext(UiContext);
	const { loading } = uiState;

	const formik = useFormik({
		initialValues:
			type === 'login' ? loginInitialValues : registerInitialValues,
		validationSchema: type === 'login' ? LoginSchema : RegisterSchema,
		onSubmit: handleSubmit,
	});

	function handleSubmit(values) {
		if (type === 'login') {
			login(values);
			return;
		}
		register(values).then((result) => {
			if (result) {
				formik.resetForm();
			}
		});
	}

	return (
		<form className="form" onSubmit={formik.handleSubmit}>
			{type === 'register' && (
				<div className="form__group">
					<input
						onChange={formik.handleChange}
						value={formik.values.name}
						type="text"
						className="form__control"
						placeholder="Your name"
						aria-label="Type your name"
						name="name"
						autoComplete="off"
					/>
					<User className="form__icon" />
					{formik.errors.name && formik.touched.name ? (
						<div className="form__feedback--error">
							{formik.errors.name}
						</div>
					) : null}
				</div>
			)}

			<div className="form__group">
				<input
					onChange={formik.handleChange}
					value={formik.values.email}
					type="email"
					className="form__control"
					placeholder="Email"
					aria-label="Type your emaill address"
					name="email"
					autoComplete="off"
				/>
				<Mail className="form__icon" />
				{formik.errors.email && formik.touched.email ? (
					<div className="form__feedback--error">
						{formik.errors.email}
					</div>
				) : null}
			</div>
			<div className="form__group">
				<input
					onChange={formik.handleChange}
					value={formik.values.password}
					type="password"
					name="password"
					className="form__control"
					placeholder="Password"
					aria-label="Type your password"
				/>
				<Lock className="form__icon" />
				{formik.errors.password && formik.touched.password ? (
					<div className="form__feedback--error">
						{formik.errors.password}
					</div>
				) : null}
			</div>
			<button
				type="submit"
				className="btn btn--blue btn--full"
				disabled={loading}
			>
				{loading ? <Loader /> : type === 'login' ? 'Login' : 'Register'}
			</button>
		</form>
	);
}

Form.propTypes = {
	type: PropTypes.oneOf(['login', 'register']).isRequired,
};

export default Form;
