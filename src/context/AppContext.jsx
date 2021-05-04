import { createContext, useCallback, useContext, useState } from 'react';
import { fetchWithToken, uploadPhoto } from '../helpers/fetch';
import { UiContext } from './UiContext';
import { AuthContext } from './AuthContext';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [channels, setChannels] = useState([]);

	const { setLoading, showAlert, closeModal } = useContext(UiContext);
	const { auth } = useContext(AuthContext);

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
				setLoading(false);
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
		} finally {
			setLoading(false);
		}
	};

	const createChannel = async (data) => {
		setLoading(true);
		try {
			const resp = await fetchWithToken(
				'channels',
				{ ...data, creator: auth.uid },
				'POST'
			);
			console.log(resp);
			const body = await resp.json();
			console.log(body);
			if (!body.success) {
				setLoading(false);
				closeModal();
				showAlert({ text: body.msg, severity: 'error' });
				return;
			}
			setChannels([...channels, body.channel]);
			closeModal();
			showAlert({
				text: 'The channel has been created',
				severity: 'success',
			});
		} catch (err) {
			console.log(err);
			closeModal();
			showAlert({
				text: 'An unexpected error occurred. Please try again later',
				severity: 'error',
			});
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
				createChannel,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
