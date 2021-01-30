import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import ChatArea from './components/chat/ChatArea';
import Modal from './components/ui/Modal';

function App() {
	const [modalIsVisible, setModalVisible] = useState(false);
	return (
		<div className="app">
			<Sidebar setModalVisible={setModalVisible} />
			<ChatArea />
			{modalIsVisible && <Modal setModalVisible={setModalVisible} />}
		</div>
	);
}

export default App;
