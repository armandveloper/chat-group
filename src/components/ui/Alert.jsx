import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AlertCircle, AlertTriangle, CheckCircle } from 'react-feather';
import styles from './Alert.module.css';
import { UiContext } from '../../context/UiContext';

function Alert({ message, severity, show, autoHideDuration }) {
	const { hideAlert } = useContext(UiContext);
	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) {
			setRender(true);
		}
	}, [show]);

	useEffect(() => {
		if (autoHideDuration) {
			const timeout = setTimeout(hideAlert, autoHideDuration);
			return () => clearTimeout(timeout);
		}
	}, [autoHideDuration, hideAlert]);

	const handleAnimationEnd = () => {
		if (!show) {
			setRender(false);
		}
	};

	if (!shouldRender) return null;

	return (
		<div
			role="alert"
			onAnimationEnd={handleAnimationEnd}
			className={`${styles.alert} ${styles[severity]} ${
				show ? styles.show : styles.hide
			}`}
		>
			{severity === 'error' ? (
				<AlertCircle size={24} />
			) : severity === 'warning' ? (
				<AlertTriangle size={24} />
			) : (
				<CheckCircle size={24} />
			)}
			{message}
			{/* <button onClick={hideAlert} className={styles.close}>
				<X size={18} color="currentColor" />
			</button> */}
		</div>
	);
}

Alert.propTypes = {
	message: PropTypes.string.isRequired,
	severity: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
	show: PropTypes.bool.isRequired,
	autoHideDuration: PropTypes.number,
};

export default Alert;
