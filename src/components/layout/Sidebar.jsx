import React, { useRef, useContext } from 'react';
import { Plus, ChevronLeft, X } from 'react-feather';
import SearchBox from '../ui/SearchBox';
import SidebarList from '../channel/SidebarList';
import SidebarFooter from '../ui/SidebarFooter';
import './Sidebar.css';
import { UiContext } from '../../context/UiContext';

const members = [
	'Xanthe Neal',
	'Nellie Francis',
	'Denzel Barret',
	'Shaunna Firth',
	'Annaliese Huynh',
];
const channels = ['Front-end developers', 'Random', 'Backend', 'Welcome'];

const Sidebar = React.forwardRef(function ({ hideSidebar }, ref) {
	const {
		sidebarView,
		showAllChannels,
		showChannelInfo,
		toggleModal,
	} = useContext(UiContext);

	const sidebar2Ref = useRef(null);

	const backToChannelsView = () => {
		sidebar2Ref.current.classList.add('sidebar__inner--out');
		sidebar2Ref.current.addEventListener('animationend', () => {
			console.log('finish');
			sidebar2Ref.current.classList.remove('sidebar__inner--out');
			showAllChannels();
		});
	};

	const channelViewSidebar = (
		<>
			<div className="sidebar__top">
				<button
					className="btn--icon"
					title="Back to all channels"
					onClick={backToChannelsView}
				>
					<ChevronLeft />
				</button>
				<h3 className="sidebar__title">All channels</h3>
			</div>
			<div className="sidebar__channel-info">
				<h4>Front-end Developers</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Fuga nam eligendi illo quo veritatis, qui excepturi laborum
					cupiditate odio quaerat, ab reiciendis debitis perferendis
					repellendus!
				</p>
			</div>
			<h4 className="sidebar__members_title">Members</h4>
			<SidebarList items={members} />
			<SidebarFooter />
		</>
	);

	const channelsViewSidebar = (
		<>
			<div className="sidebar__top">
				<h3 className="sidebar__title">Channels</h3>
				<button
					className="btn--icon btn--gray"
					title="Create new channel"
					onClick={toggleModal}
				>
					<Plus />
				</button>
			</div>
			<div className="sidebar__space">
				<SearchBox />
			</div>
			<SidebarList
				handleClick={true}
				items={channels}
				uppercase={true}
				setChannelView={showChannelInfo}
			/>
			<SidebarFooter />
		</>
	);

	return (
		<div className="sidebar__overlay" ref={ref}>
			<aside className="sidebar">
				<div
					className="sidebar__inner sidebar__inner--in"
					ref={sidebar2Ref}
				>
					{sidebarView === 'info'
						? channelViewSidebar
						: channelsViewSidebar}
				</div>
			</aside>
			<button className="btn--icon close-sidebar" onClick={hideSidebar}>
				<X color="#fff" size={24} />
			</button>
		</div>
	);
});

export default Sidebar;
