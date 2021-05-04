import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Avatar from '../ui/Avatar';
import './ListItem.css';

function ListItem({
	id,
	name,
	photo,
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
		getMembers(id);
	};

	return handleClick ? (
		// Esta es la lista de canales
		<li className="sidebar-list-item" onClick={handleSelectChannel}>
			{/* <img src="" alt="" className="channel-img"/> */}
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
		// Esta es la vista de los miembros de un canal
		<li className="sidebar-list-item grid">
			{/* <img src="" alt="" className="channel-img"/> */}
			<Avatar url={photo} name={name} />
			<p
				className={
					uppercase
						? 'sidebar-list-item__name sidebar-list-item__name--uppercase'
						: 'sidebar-list-item__name'
				}
			>
				{name} {id === auth.uid && '(Your)'}
			</p>
		</li>
	);
}

export default ListItem;
