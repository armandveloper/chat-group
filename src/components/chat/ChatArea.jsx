import PropTypes from 'prop-types';
import { Menu, Send } from 'react-feather';
import './ChatArea.css';
import Message from './Message';
import DateSeparator from './DateSeparator';

function ChatArea({ toggleSidebar, channel }) {
	return (
		<main className="chat__area">
			<header className="chat__header">
				<button className="btn--icon" onClick={toggleSidebar}>
					<Menu color="#fff" size={24} />
				</button>
				<h1 className="h1">{channel?.name}</h1>
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

ChatArea.propTypes = {
	toggleSidebar: PropTypes.func.isRequired,
	channel: PropTypes.func.isRequired,
};

export default ChatArea;
