import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Avatar from '../ui/Avatar';
import styles from './ListItem.module.css';

function ListItem({
	id,
	name,
	photo,
	members,
	uppercase,
	handleClick,
	setChannelView,
	selectChannel,
	getMembers,
}) {
	const { auth } = useContext(AuthContext);

	const handleSelectChannel = () => {
		selectChannel(id);
		setChannelView();
		// Evita otro llamado si ya están los miembros en memoria
		!members && getMembers(id);
	};

	return handleClick ? (
		// Esta es la lista de canales
		<li className={styles.sidebarListItem} onClick={handleSelectChannel}>
			<p
				className={`${styles.sidebarListItemName} ${
					uppercase ? styles.uppercase : ''
				}`}
			>
				{name}
			</p>
		</li>
	) : (
		// Esta es la vista de los miembros de un canal
		<li className={`${styles.sidebarListItem} ${styles.grid}`}>
			<Avatar url={photo} name={name} />
			<p
				className={`${styles.sidebarListItemName} ${
					uppercase ? styles.uppercase : ''
				}`}
			>
				{name} {id === auth.uid && '(Your)'}
			</p>
		</li>
	);
}

export default ListItem;
