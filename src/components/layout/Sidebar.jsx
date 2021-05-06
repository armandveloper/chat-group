import { forwardRef, useState } from 'react';
import { X } from 'react-feather';
import styles from './Sidebar.module.css';
import SidebarChannels from '../channel/SidebarChannels';
import SidebarChannel from '../channel/SidebarChannel';

const Sidebar = forwardRef(function Sidebar(
	{
		channels,
		selectedChannel,
		hideSidebar,
		openModal,
		selectChannel,
		getMembers,
	},
	ref
) {
	const [sidebarView, setSidebarView] = useState('all');

	return (
		<div className={styles.overlay} ref={ref}>
			<aside className={styles.sidebar}>
				<SidebarChannels
					channels={channels}
					selectChannel={selectChannel}
					getMembers={getMembers}
					setSidebarView={setSidebarView}
					show={sidebarView === 'all'}
					openModal={openModal}
				/>
				<SidebarChannel
					setSidebarView={setSidebarView}
					channel={selectedChannel}
					show={sidebarView === 'info'}
					openModal={openModal}
				/>
			</aside>
			<button
				className={`btn--icon ${styles.close}`}
				onClick={hideSidebar}
			>
				<X color="#fff" size={24} />
			</button>
		</div>
	);
});

export default Sidebar;
