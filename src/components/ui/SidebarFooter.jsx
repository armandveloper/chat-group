import { useContext } from 'react';
import { ChevronDown } from 'react-feather';
import { AppContext } from '../../context/AppContext';
import { usePopupMenu } from '../../hooks/usePopupMenu';
import Avatar from '../ui/Avatar';
import Menu from './Menu';
import './SidebarFooter.css';

function SidebarFooter() {
	const { user } = useContext(AppContext);

	const [isMenuOpen, toggleMenu] = usePopupMenu();

	return (
		<div className="sidebar__footer">
			<Avatar name={user?.name || ''} url={user?.photo || ''} />
			<p className="username">{user?.name}</p>
			<button className="btn--icon relative" onClick={toggleMenu}>
				<ChevronDown />
			</button>
			<Menu isOpen={isMenuOpen} />
		</div>
	);
}

export default SidebarFooter;
