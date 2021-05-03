import React from 'react';
import Avatar from '../ui/Avatar';
import './ListItem.css';

function ListItem({ name, uppercase, handleClick, setChannelView }) {
	const showChannelView = ({ target }) => {
		const $sidebar = target.closest('.sidebar__inner');
		$sidebar.classList.add('sidebar__inner--out');
		$sidebar.addEventListener('animationend', () => {
			$sidebar.classList.remove('sidebar__inner--out');
			setChannelView(true);
		});
	};
	return handleClick ? (
		<li className="sidebar-list-item" onClick={showChannelView}>
			{/* <img src="" alt="" className="channel-img"/> */}
			<Avatar />
			<p
				className={
					uppercase
						? 'sidebar-list-item__name sidebar-list-item__name--uppercase'
						: 'sidebar-list-item__name'
				}
			>
				{name}
			</p>
		</li>
	) : (
		<li className="sidebar-list-item">
			{/* <img src="" alt="" className="channel-img"/> */}
			<Avatar />
			<p
				className={
					uppercase
						? 'sidebar-list-item__name sidebar-list-item__name--uppercase'
						: 'sidebar-list-item__name'
				}
			>
				{name}
			</p>
		</li>
	);
}

export default ListItem;
