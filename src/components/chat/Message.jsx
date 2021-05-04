import styles from './Message.module.css';
import Avatar from '../ui/Avatar';

function Message() {
	// const { contact, datetime, text, avatar } = props;
	return (
		<div className={styles.message}>
			<Avatar />
			<div>
				<div className={styles.metadata}>
					<p className={styles.sender}>Armando Cruz</p>
					<small className={styles.timestamp}>
						yesterday at 2:29 PM
					</small>
				</div>
				<p className={styles.text}>
					Lorem ipsum dolor 🤦‍♂️sit, amet consectetur adipisicing elit.
					Labore dolorum voluptas illo praesentium nulla👆 excepturi
					aperiam magni veniam dolore sequi! 👱‍♀️
				</p>
			</div>
		</div>
	);
}

export default Message;
