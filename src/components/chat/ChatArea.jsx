import { useContext } from 'react';
import { Menu, Send } from 'react-feather';
import './ChatArea.css';
import Message from './Message';
import DateSeparator from './DateSeparator';
import { UiContext } from '../../context/UiContext';

function ChatArea({ toggleSidebar }) {
	const { setShowSidebar } = useContext(UiContext);

	return (
		<main className="chat__area">
			<header className="chat__header">
				<button
					className="btn--icon"
					onClick={() => {
						toggleSidebar();
						setShowSidebar(true);
					}}
				>
					<Menu color="#fff" size={24} />
				</button>
				<h1 className="h1">Front-end developers</h1>
			</header>
			<div className="chat__conversation">
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<DateSeparator date="October 10, 2020" />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
			</div>
			<div className="chat__footer">
				<div className="chat__footer-inner">
					<input
						type="text"
						className="chat__input"
						placeholder="Type a message here"
						aria-label="Type a message"
					/>
					<button
						className="btn--icon btn--blue"
						title="Send message"
					>
						<Send size={20} />
					</button>
				</div>
			</div>
		</main>
	);
}

export default ChatArea;
