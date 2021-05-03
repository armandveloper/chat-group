import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Alert from '../components/ui/Alert';
import Form from '../components/ui/Form';
import { UiContext } from '../context/UiContext';
import './Auth.css';

function RegisterScreen() {
	const { message } = useContext(UiContext);
	const { pathname } = useLocation();
	return (
		<div className="auth-screen">
			<Alert
				show={message !== null}
				message={message?.text || ''}
				severity={message?.severity || 'error'}
				autoHideDuration={3000}
			/>
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

				<Form type={pathname === '/login' ? 'login' : 'register'} />

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
