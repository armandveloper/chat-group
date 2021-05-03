import { useContext } from 'react';
import Sidebar from '../components/layout/Sidebar';
import ChatArea from '../components/chat/ChatArea';
import Modal from '../components/ui/Modal';
import { useSidebar } from '../hooks/useSidebar';
import { UiContext } from '../context/UiContext';

function ChatScreen() {
	const { isModalOpen } = useContext(UiContext);

	const [sidebarRef, toggleSidebar, , hideSidebar] = useSidebar();

	return (
		<div className="app">
			<Sidebar ref={sidebarRef} hideSidebar={hideSidebar} />
			<ChatArea toggleSidebar={toggleSidebar} />
			<Modal isOpen={isModalOpen} />
		</div>
	);
}

export default ChatScreen;
