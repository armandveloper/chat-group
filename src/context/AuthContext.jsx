import { createContext, useCallback, useContext, useState } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { UiContext } from './UiContext';

const initialState = {
	uid: null,
	checking: true,
	logged: false,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState);

	const { showAlert, setLoading } = useContext(UiContext);

	const register = async (data) => {
		setLoading(true);
		try {
			const resp = await fetchWithoutToken(
				'/auth/register',
				data,
				'POST'
			);
			const body = await resp.json();
			if (!body.success) {
				showAlert({ text: body.msg, severity: 'error' });
				setLoading(false);
				return;
			}
			showAlert({ text: body.msg, severity: 'success' });
			setLoading(false);
			return 'success';
		} catch (err) {
			console.log(err);
			setLoading(false);
			showAlert({
				text: 'Something went wrong. Please try again later',
				severity: 'error',
			});
		}
	};

	const login = async (data) => {
		setLoading(true);
		try {
			const resp = await fetchWithoutToken('/auth/login', data, 'POST');
			const body = await resp.json();
			if (!body.success) {
				setLoading(false);
				showAlert({ text: body.msg, severity: 'error' });
				return;
			}
			setLoading(false);
			const { uid } = body.user;
			localStorage.setItem('chat-group:token', body.token);
			setAuth({
				uid,
				checking: false,
				logged: true,
			});
			showAlert({ text: body.msg, severity: 'success' });
		} catch (err) {
			console.log(err);
			setLoading(false);
			showAlert({
				text: 'Something went wrong. Please try again later',
				severity: 'error',
			});
		}
	};

	const verifyToken = useCallback(async () => {
		const token = localStorage.getItem('chat-group:token');
		if (!token) {
			setAuth({
				uid: null,
				checking: false,
				logged: false,
			});
			return false;
		}

		const resp = await fetchWithToken('/auth/renewToken');
		const body = await resp.json();
		if (body.success) {
			const { uid } = body.user;
			localStorage.setItem('chat-group:token', body.token);
			setAuth({
				uid,
				checking: false,
				logged: true,
			});
			return true;
		}
		setAuth({
			uid: null,
			checking: false,
			logged: false,
		});
		return false;
	}, []);

	const logout = () => {
		localStorage.removeItem('chat-group:token');
		setAuth({
			uid: null,
			checking: false,
			logged: false,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				auth,
				register,
				login,
				logout,
				verifyToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
