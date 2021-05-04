import styles from './DateSeparator.module.css';

function DateSeparator({ date }) {
	return (
		<div className={styles.separator}>
			<small className={styles.date}>{date}</small>
		</div>
	);
}

export default DateSeparator;
