import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import SearchBox from '../ui/SearchBox';
import SidebarFooter from '../ui/SidebarFooter';
import SidebarList from './SidebarList';
import styles from '../layout/Sidebar.module.css';

function SidebarChannels({
	channels,
	show,
	setSidebarView,
	getMembers,
	selectChannel,
	openModal,
}) {
	if (!show) return null;

	const showChannelInfo = () => {
		setSidebarView('info');
	};

	return (
		<div className={styles.inner}>
			<div className={styles.top}>
				<h3 className={styles.title}>Channels</h3>
				<button
					className="btn--icon btn--gray"
					title="Create new channel"
					onClick={openModal}
				>
					<Plus />
				</button>
			</div>
			<div className={styles.space}>
				<SearchBox />
			</div>
			<SidebarList
				handleClick={true}
				selectChannel={selectChannel}
				items={channels}
				uppercase={true}
				setChannelView={showChannelInfo}
				getMembers={getMembers}
			/>
			<SidebarFooter />
		</div>
	);
}

SidebarChannels.propTypes = {
	show: PropTypes.bool.isRequired,
	openModal: PropTypes.func.isRequired,
};

export default SidebarChannels;
