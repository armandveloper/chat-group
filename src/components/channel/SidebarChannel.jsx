import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft } from 'react-feather';
// import { UiContext } from '../../context/UiContext';
// import types from '../../types';
import SidebarFooter from '../ui/SidebarFooter';
import SidebarList from './SidebarList';
import styles from '../layout/Sidebar.module.css';

function SidebarChannel({ channel, show, setSidebarView }) {
	const [shouldRender, setRender] = useState(show);

	// const [, uiDispatch] = useContext(UiContext);

	const members = channel?.members || [];

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	if (!shouldRender) return null;

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	const showAllChannels = () => {
		setSidebarView('all');
	};

	return (
		<div
			className={`${styles.inner} ${show ? styles.show : styles.hide}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<div className={styles.top}>
				<button
					className="btn--icon"
					title="Back to all channels"
					onClick={({ target }) => {
						const $sidebar = target.parentElement.parentElement;
						$sidebar.classList.add(styles.hide);
						$sidebar.addEventListener('animationend', () => {
							showAllChannels();
						});
					}}
				>
					<ChevronLeft />
				</button>
				<h3 className={styles.title}>All channels</h3>
			</div>
			<div className={styles.channelInfo}>
				<h4>{channel?.name}</h4>
				<p>{channel?.description}</p>
			</div>
			<h4 className={styles.membersTitle}>Members</h4>
			<SidebarList items={members} />
			<SidebarFooter />
		</div>
	);
}

SidebarChannel.propTypes = {
	show: PropTypes.bool.isRequired,
};

export default SidebarChannel;
