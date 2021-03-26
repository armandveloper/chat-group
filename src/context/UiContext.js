import { createContext, useState } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	// All channels or channel info
	const [sidebarView, setSidebarView] = useState('all');

	const showAllChannels = () => setSidebarView('all');

	const showChannelInfo = () => setSidebarView('info');

	const [isModalOpen, setModalOpen] = useState(false);

	const closeModal = () => setModalOpen(false);

	const openModal = () => setModalOpen(true);

	const toggleModal = () => setModalOpen(!isModalOpen);

	return (
		<UiContext.Provider
			value={{
				sidebarView,
				showAllChannels,
				showChannelInfo,
				isModalOpen,
				closeModal,
				openModal,
				toggleModal,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
