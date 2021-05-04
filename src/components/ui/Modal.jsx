import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({ open, onClose, children }) {
	const [shouldRender, setRender] = useState(open);

	console.log('should render:', shouldRender);

	useEffect(() => {
		if (open) setRender(true);
	}, [open]);

	const handleAnimationEnd = () => {
		if (!open) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<div
			className={styles.overlay}
			onClick={onClose}
			onAnimationEnd={handleAnimationEnd}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${styles.content} ${
					open ? styles.open : styles.hidden
				}`}
			>
				{children}
			</div>
		</div>
	);
}

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default Modal;
