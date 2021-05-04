import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UiContext } from '../context/UiContext';
import './Auth.css';
import Alert from '../components/ui/Alert';
import Form from '../components/ui/Form';

function AuthScreen() {
	const [uiState] = useContext(UiContext);
	const { message } = uiState;
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
				{pathname === '/auth/login' ? (
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

				<Form
					type={pathname === '/auth/login' ? 'login' : 'register'}
				/>

				<p className="box__text">
					{pathname === '/auth/login'
						? "Don't have an account?"
						: 'Already have an account?'}{' '}
					<Link
						to={
							pathname === '/auth/login'
								? '/auth/register'
								: '/auth/login'
						}
						className="box__link"
					>
						{pathname === '/auth/login' ? 'Signup' : 'Login'}
					</Link>
				</p>
			</div>
		</div>
	);
}

export default AuthScreen;
