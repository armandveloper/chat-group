import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AppContext } from '../context/AppContext';
import { useSidebar } from '../hooks/useSidebar';
import { fetchWithToken } from '../helpers/fetch';
import Sidebar from '../components/layout/Sidebar';
import ChatArea from '../components/chat/ChatArea';
import Alert from '../components/ui/Alert';
import Modal from '../components/ui/Modal';
import AddChannel from '../components/channel/AddChannel';
import InviteMember from '../components/channel/InviteMember';

function ChatScreen() {
	const { auth } = useContext(AuthContext);
	const { user, getUser } = useContext(AppContext);

	const [loading, setLoading] = useState(false);

	const [message, setMessage] = useState(null);

	const showAlert = (alert) => setMessage(alert);
	const hideAlert = useCallback(() => setMessage(null), []);

	const [sidebarRef, toggleSidebar, , hideSidebar] = useSidebar();

	useEffect(() => {
		if (!user) {
			getUser();
		}
	}, [user, getUser]);
	const [isModalOpen, setModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState('add-channel'); // add-channel | invite-member
	const closeModal = () => setModalOpen(false);
	const openModal = (content = 'add-channel') => {
		setModalContent(
			content === 'invite-member' ? 'invite-member' : 'add-channel'
		);
		setModalOpen(true);
	};

	// Channel: { id, name,description, members: [] }
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		const getChannels = async () => {
			setLoading(true);
			try {
				const resp = await fetchWithToken(`membership/${auth.uid}`);
				const body = await resp.json();
				if (!body.success) {
					setLoading(false);
					showAlert({ text: body.msg, severity: 'warning' });
					return;
				}
				setChannels(body.channels.map(({ channel }) => channel));
			} catch (err) {
				console.log(err);
				showAlert({
					text: 'Something went wrong. Please try again later',
					severity: 'error',
				});
			} finally {
				setLoading(false);
			}
		};
		getChannels();
	}, [auth]);

	const [selectedChannel, setChannel] = useState(null);

	const selectChannel = (id) => {
		const channel = channels.find((channel) => channel._id === id) || null;
		setChannel(channel);
	};

	const getChannelMembers = async (id) => {
		setLoading(true);
		try {
			const resp = await fetchWithToken(`channels/${id}/members`);
			const body = await resp.json();
			console.log(body);
			if (!body.success) {
				setLoading(false);
				showAlert({ text: body.msg, severity: 'warning' });
				return;
			}
			const members = body.members.map(({ user }) => user);
			const channelsWithMembers = channels.map((channel) =>
				channel._id === id ? { ...channel, members } : channel
			);
			setChannels(channelsWithMembers);
			setChannel((selectedChannel) => ({ ...selectedChannel, members }));
		} catch (err) {
			console.log(err);
			showAlert({
				text: 'Something went wrong. Please try again later',
				severity: 'error',
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Alert
				show={message !== null}
				message={message?.text || ''}
				severity={message?.severity || 'error'}
				autoHideDuration={3000}
				onHide={hideAlert}
			/>
			<Sidebar
				channels={channels}
				selectedChannel={selectedChannel}
				selectChannel={selectChannel}
				getMembers={getChannelMembers}
				openModal={openModal}
				hideSidebar={hideSidebar}
				ref={sidebarRef}
			/>
			<ChatArea channel={selectedChannel} toggleSidebar={toggleSidebar} />
			<Modal open={isModalOpen} onClose={closeModal}>
				{modalContent === 'add-channel' ? (
					<AddChannel
						loading={loading}
						setLoading={setLoading}
						showAlert={showAlert}
						setChannels={setChannels}
						closeModal={closeModal}
					/>
				) : (
					<InviteMember
						loading={loading}
						channel={selectedChannel}
						setLoading={setLoading}
						showAlert={showAlert}
						closeModal={closeModal}
					/>
				)}
			</Modal>
		</>
	);
}

export default ChatScreen;
