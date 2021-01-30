import React from 'react';
import ListItem from './ListItem';
import './SidebarList.css';

function SidebarList({ items, uppercase, handleClick, setChannelView }) {
	return (
		<ul className="sidebar-list">
			{items.map((item, i) => (
				<ListItem
					key={i}
					name={item}
					uppercase={uppercase}
					handleClick={handleClick}
					setChannelView={setChannelView}
				/>
			))}
		</ul>
	);
}

export default SidebarList;
