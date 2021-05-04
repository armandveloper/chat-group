import { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiContext';
import { AppContext } from '../context/AppContext';
import { useSidebar } from '../hooks/useSidebar';
import Sidebar from '../components/layout/Sidebar';
import ChatArea from '../components/chat/ChatArea';
import Alert from '../components/ui/Alert';
import Modal from '../components/ui/Modal';
import AddChannel from '../components/channel/AddChannel';

function ChatScreen() {
	const { isModalOpen, message, closeModal } = useContext(UiContext);
	const { user, getUser } = useContext(AppContext);

	const [sidebarRef, toggleSidebar, , hideSidebar] = useSidebar();

	console.log(
		'chat screen se renderizó y el valo del modal es: ',
		isModalOpen
	);

	useEffect(() => {
		if (!user) {
			getUser();
		}
	}, [user, getUser]);

	return (
		<>
			<Alert
				show={message !== null}
				message={message?.text || ''}
				severity={message?.severity || 'error'}
				autoHideDuration={3000}
			/>
			<Sidebar hideSidebar={hideSidebar} ref={sidebarRef} />
			<ChatArea toggleSidebar={toggleSidebar} />
			<Modal open={isModalOpen} onClose={closeModal}>
				<AddChannel />
			</Modal>
		</>
	);
}

export default ChatScreen;
