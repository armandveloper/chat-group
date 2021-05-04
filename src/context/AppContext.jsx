import { createContext, useCallback, useContext, useState } from 'react';
import { fetchWithToken, uploadPhoto } from '../helpers/fetch';
import { UiContext } from './UiContext';
import { AuthContext } from './AuthContext';
import types from '../types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const [, uiDispatch] = useContext(UiContext);
	const { auth } = useContext(AuthContext);

	const showAlert = (alert) => {
		uiDispatch({
			type: types.UI_SET_MESSAGE,
			payload: alert,
		});
	};

	const setLoading = useCallback(
		(loading) => {
			uiDispatch({
				type: types.UI_SET_LOADING,
				payload: loading,
			});
		},
		[uiDispatch]
	);

	const getUser = useCallback(async () => {
		try {
			const resp = await fetchWithToken(`users/${auth.uid}`);
			const data = await resp.json();
			setUser(data.user);
		} catch (err) {
			console.log(err);
		}
	}, [auth.uid]);

	const editProfile = async (data) => {
		setLoading(true);
		try {
			const resp = await fetchWithToken(`users/${auth.uid}`, data, 'PUT');
			const body = await resp.json();
			if (!body.success) {
				uiDispatch({
					type: types.UI_SET_LOADING,
				});
				showAlert({ text: body.msg, severity: 'error' });
				return;
			}
			setUser(body.user);
			showAlert({
				text: 'Profile has been updated',
				severity: 'success',
			});
		} catch (err) {
			console.log(err);
			showAlert({
				text: 'An unexpected error occurred. Please try again later',
				severity: 'error',
			});
		} finally {
			setLoading(false);
		}
	};

	const editPhoto = async (photo) => {
		setLoading(true);
		try {
			const resp = await uploadPhoto(
				`users/${auth.uid}/photo`,
				photo,
				'PUT'
			);
			const body = await resp.json();
			if (!body.success) {
				setLoading(false);
				showAlert({ text: body.msg, severity: 'error' });
				return;
			}
			setUser({ ...user, photo: body.photo });
			showAlert({
				text: 'Profile picture has been updated',
				severity: 'success',
			});
		} catch (err) {
			console.log(err);
			showAlert({
				text: 'An unexpected error occurred. Please try again later',
				severity: 'error',
			});
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AppContext.Provider
			value={{
				user,
				getUser,
				editProfile,
				editPhoto,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
