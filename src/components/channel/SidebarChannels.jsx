import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import SearchBox from '../ui/SearchBox';
import SidebarFooter from '../ui/SidebarFooter';
import SidebarList from './SidebarList';
import styles from '../layout/Sidebar.module.css';

function SidebarChannels({ show }) {
	const [shouldRender, setRender] = useState(show);

	const { toggleModal, showChannelInfo } = useContext(UiContext);

	const channels = ['Front-end developers', 'Random', 'Backend', 'Welcome'];

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	if (!shouldRender) return null;

	const handleAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return (
		<div className={styles.inner}>
			<div className={styles.top}>
				<h3 className={styles.title}>Channels</h3>
				<button
					className="btn--icon btn--gray"
					title="Create new channel"
					onClick={toggleModal}
				>
					<Plus />
				</button>
			</div>
			<div className={styles.space}>
				<SearchBox />
			</div>
			<SidebarList
				handleClick={true}
				items={channels}
				uppercase={true}
				setChannelView={showChannelInfo}
			/>
			<SidebarFooter />
		</div>
	);
}

SidebarChannels.propTypes = {
	show: PropTypes.bool.isRequired,
};

export default SidebarChannels;
