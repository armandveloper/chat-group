import styles from '../layout/Sidebar.module.css';
import ListItem from './ListItem';

function SidebarList({ items, uppercase, handleClick, setChannelView }) {
	return (
		<ul className={styles.list}>
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
