import styles from '../layout/Sidebar.module.css';
import itemStyles from './ListItem.module.css';
import ListItem from './ListItem';
import { Plus } from 'react-feather';

function SidebarList({
	items,
	uppercase,
	handleClick,
	addMember,
	setChannelView,
	selectChannel,
	getMembers,
	openModal,
}) {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<ListItem
					key={item._id}
					id={item._id}
					name={item.name}
					photo={item.photo}
					members={item?.members}
					uppercase={uppercase}
					getMembers={getMembers}
					handleClick={handleClick}
					selectChannel={selectChannel}
					setChannelView={setChannelView}
				/>
			))}
			{addMember && (
				<li
					className={`${itemStyles.sidebarListItem} ${itemStyles.grid}`}
					onClick={() => openModal('invite-member')}
				>
					<button
						className="btn--icon btn--gray"
						title="Invite a new member to the channel"
					>
						<Plus />
					</button>
					<p className={itemStyles.sidebarListItemName}>Add member</p>
				</li>
			)}
		</ul>
	);
}

export default SidebarList;
