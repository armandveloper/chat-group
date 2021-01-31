import React from 'react';
import { Mail, Lock } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import './Auth.css';

function RegisterScreen() {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<div className="auth-screen">
			<div className="box">
				{pathname === '/login' ? (
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
						{pathname === '/login' ? 'Login' : 'Register'}
					</button>
				</form>
				<p className="box__text">
					{pathname === '/login'
						? "Don't have an account?"
						: 'Already have an account?'}{' '}
					<Link
						to={pathname === '/login' ? '/register' : '/login'}
						className="box__link"
					>
						{pathname === '/login' ? 'Signup' : 'Login'}
					</Link>
				</p>
			</div>
		</div>
	);
}

export default RegisterScreen;
