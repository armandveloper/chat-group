import styles from '../layout/Sidebar.module.css';
import ListItem from './ListItem';

function SidebarList({
	items,
	uppercase,
	handleClick,
	setChannelView,
	selectChannel,
	getMembers,
}) {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<ListItem
					key={item._id}
					id={item._id}
					name={item.name}
					photo={item.photo}
					uppercase={uppercase}
					getMembers={getMembers}
					handleClick={handleClick}
					selectChannel={selectChannel}
					setChannelView={setChannelView}
				/>
			))}
		</ul>
	);
}

export default SidebarList;
