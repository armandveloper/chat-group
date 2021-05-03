import styles from './Loader.module.css';

function Loader() {
	return (
		<div className={styles.loader} role="status" aria-label="Loading..." />
	);
}

export default Loader;
