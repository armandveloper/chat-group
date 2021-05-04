import PropTypes from 'prop-types';
import { Menu, Send } from 'react-feather';
import styles from './ChatArea.module.css';
import Message from './Message';
import DateSeparator from './DateSeparator';

function ChatArea({ toggleSidebar, channel }) {
	return (
		<main className={styles.content}>
			<header className={styles.header}>
				<button
					className={`btn--icon ${styles.menu}`}
					onClick={toggleSidebar}
				>
					<Menu color="#fff" size={24} />
				</button>
				<h1 className="h1">{channel?.name}</h1>
			</header>
			<div className={styles.conversation}>
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
			<div className={styles.footer}>
				<div className={styles.footerInner}>
					<input
						type="text"
						className={styles.input}
						placeholder="Type a message here"
						aria-label="Type a message"
					/>
					<button
						className={`btn--icon btn--blue ${styles.btn}`}
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
};

export default ChatArea;
