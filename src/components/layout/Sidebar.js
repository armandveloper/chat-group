import React, { useState, useRef } from 'react';
import { Plus, ChevronLeft } from 'react-feather';
import SearchBox from '../ui/SearchBox';
import SidebarList from '../channel/SidebarList';
import SidebarFooter from '../ui/SidebarFooter';
import './Sidebar.css';

const members = [
	'Xanthe Neal',
	'Nellie Francis',
	'Denzel Barret',
	'Shaunna Firth',
	'Annaliese Huynh',
];
const channels = ['Front-end developers', 'Random', 'Backend', 'Welcome'];

function Sidebar({ setModalVisible }) {
	const [isChannelView, setChannelView] = useState(true);

	const sidebarRef = useRef(null);

	const toggleModal = () => setModalVisible(true);

	const backToChannelsView = () => {
		sidebarRef.current.classList.add('sidebar__inner--out');
		sidebarRef.current.addEventListener('animationend', () => {
			console.log('finish');
			sidebarRef.current.classList.remove('sidebar__inner--out');
			setChannelView(false);
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
				setChannelView={setChannelView}
			/>
			<SidebarFooter />
		</>
	);

	return (
		<aside className="sidebar">
			<div className="sidebar__inner sidebar__inner--in" ref={sidebarRef}>
				{isChannelView ? channelViewSidebar : channelsViewSidebar}
			</div>
		</aside>
	);
}

export default Sidebar;
