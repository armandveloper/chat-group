import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import SidebarFooter from '../ui/SidebarFooter';
import SidebarList from './SidebarList';
import styles from '../layout/Sidebar.module.css';

function SidebarChannel({ show }) {
	const [shouldRender, setRender] = useState(show);

	const { showAllChannels } = useContext(UiContext);

	const members = [
		'Xanthe Neal',
		'Nellie Francis',
		'Denzel Barret',
		'Shaunna Firth',
		'Annaliese Huynh',
	];

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	if (!shouldRender) return null;

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
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
				<h4>Front-end Developers</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Fuga nam eligendi illo quo veritatis, qui excepturi laborum
					cupiditate odio quaerat, ab reiciendis debitis perferendis
					repellendus!
				</p>
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
