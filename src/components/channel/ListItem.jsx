import Avatar from '../ui/Avatar';
import './ListItem.css';

function ListItem({ name, uppercase, handleClick, setChannelView }) {
	const showChannelView = ({ target }) => {
		// const $sidebar = target.closest('.sidebar__inner');
		// $sidebar.classList.add('sidebar__inner--out');
		// $sidebar.addEventListener('animationend', () => {
		// 	$sidebar.classList.remove('sidebar__inner--out');
		// 	setChannelView(true);
		// });
		setChannelView();
	};
	return handleClick ? (
		// Esta es la lista de canales
		<li className="sidebar-list-item" onClick={showChannelView}>
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
