import React from 'react';
import { Mail, Lock } from 'react-feather';
import './Auth.css';

function RegisterScreen() {
	const authType = 'Register';
	return (
		<div className="auth-screen">
			<div className="box">
				{authType === 'Login' ? (
					<h1 className="box__title">Login</h1>
				) : (
					<>
						<h1 className="box__title">
							Stay connected with your team
						</h1>
						<p className="box__description">
							Communicate, share and talk with your work team
						</p>
					</>
				)}
				<form className="form">
					<div className="form__group">
						<input
							type="email"
							className="form__control"
							placeholder="Emai"
							aria-label="Type your emaill address"
							name="email"
							autoComplete="off"
						/>
						<Mail className="form__icon" />
					</div>
					<div className="form__group">
						<input
							type="password"
							name="password"
							className="form__control"
							placeholder="Password"
							aria-label="Type your password"
						/>
						<Lock className="form__icon" />
					</div>
					<button type="submit" className="btn btn--blue btn--full">
						{authType}
					</button>
				</form>
				<p className="box__text">
					{authType === 'Login'
						? "Don't have an account?"
						: 'Already have an account?'}{' '}
					<a href="!#" className="box__link">
						{authType === 'Login' ? 'Signup' : 'Login'}
					</a>
				</p>
			</div>
		</div>
	);
}

export default RegisterScreen;
