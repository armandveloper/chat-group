import { createContext, useCallback, useContext, useState } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import types from '../types';
import { UiContext } from './UiContext';

const initialState = {
	uid: null,
	checking: true,
	logged: false,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState);

	const [, uiDispatch] = useContext(UiContext);

	const register = async (data) => {
		uiDispatch({
			type: types.UI_SET_LOADING,
		});
		try {
			const resp = await fetchWithoutToken(
				'/auth/register',
				data,
				'POST'
			);
			const body = await resp.json();
			if (!body.success) {
				uiDispatch({
					type: types.UI_SET_LOADING,
				});
				uiDispatch({
					type: types.UI_SET_MESSAGE,
					payload: { text: body.msg, severity: 'error' },
				});

				return;
			}
			uiDispatch({
				type: types.UI_SET_LOADING,
			});
			uiDispatch({
				type: types.UI_SET_MESSAGE,
				payload: { text: body.msg, severity: 'success' },
			});
			return 'success';
		} catch (err) {
			console.log(err);
			uiDispatch({
				type: types.UI_SET_LOADING,
			});
			uiDispatch({
				type: types.UI_SET_MESSAGE,
				payload: {
					text: 'Something went wrong. Please try again later',
					severity: 'error',
				},
			});
		}
	};

	const login = async (data) => {
		uiDispatch({
			type: types.UI_SET_LOADING,
		});
		try {
			const resp = await fetchWithoutToken('/auth/login', data, 'POST');
			const body = await resp.json();
			if (!body.success) {
				uiDispatch({
					type: types.UI_SET_LOADING,
				});
				uiDispatch({
					type: types.UI_SET_MESSAGE,
					payload: { text: body.msg, severity: 'error' },
				});
				return;
			}
			uiDispatch({
				type: types.UI_SET_LOADING,
			});
			const { uid } = body.user;
			localStorage.setItem('chat-group:token', body.token);
			setAuth({
				uid,
				checking: false,
				logged: true,
			});
		} catch (err) {
			console.log(err);
			uiDispatch({
				type: types.UI_SET_LOADING,
			});
			uiDispatch({
				type: types.UI_SET_MESSAGE,
				payload: {
					text: 'Something went wrong. Please try again later',
					severity: 'error',
				},
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

		const resp = await fetchWithToken('auth/renewToken');
		if (resp.status === 401) {
			setAuth({
				uid: null,
				checking: false,
				logged: false,
			});
			return false;
		}

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
