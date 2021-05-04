import { createContext, useReducer } from 'react';
import uiReducer from '../reducers/uiReducer';
import types from '../types';

const initialState = {
	loading: false,
	isModalOpen: false,
	sidebarView: 'all', // all | info
	showSidebar: false,
	message: null,
};

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	const [state, dispatch] = useReducer(uiReducer, initialState);

	const { loading, isModalOpen, sidebarView, showSidebar, message } = state;

	const setLoading = (loading) => {
		dispatch({
			type: types.UI_SET_lOADING,
			payload: loading,
		});
	};

	const closeModal = () => {
		dispatch({
			type: types.UI_SET_MODAL_OPEN,
			payload: false,
		});
	};

	const openModal = () => {
		dispatch({
			type: types.UI_SET_MODAL_OPEN,
			payload: true,
		});
	};

	const toggleModal = () => {
		dispatch({
			type: types.UI_SET_MODAL_OPEN,
			payload: !isModalOpen,
		});
	};

	// All channels or channel info

	const showAllChannels = () => {
		dispatch({
			type: types.UI_SET_SIDEBAR_VIEW,
			payload: 'all',
		});
	};

	const showChannelInfo = () => {
		dispatch({
			type: types.UI_SET_SIDEBAR_VIEW,
			payload: 'info',
		});
	};

	const setShowSidebar = (show) => {
		dispatch({
			type: types.UI_SET_SHOW_SIDEBAR,
			payload: show,
		});
	};

	// Forma { text, severity }

	const showAlert = (alert) => {
		dispatch({
			type: types.UI_SET_MESSAGE,
			payload: alert,
		});
	};

	const hideAlert = () => {
		dispatch({
			type: types.UI_SET_MESSAGE,
			payload: null,
		});
	};

	return (
		<UiContext.Provider
			value={{
				sidebarView,
				showSidebar,
				showAllChannels,
				setShowSidebar,
				showChannelInfo,
				isModalOpen,
				closeModal,
				openModal,
				toggleModal,
				showAlert,
				hideAlert,
				message,
				loading,
				setLoading,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
