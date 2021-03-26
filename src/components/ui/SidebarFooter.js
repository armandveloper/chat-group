import { ChevronDown } from 'react-feather';
import { usePopupMenu } from '../../hooks/usePopupMenu';
import Avatar from '../ui/Avatar';
import Menu from './Menu';
import './SidebarFooter.css';

function SidebarFooter() {
	const [isMenuOpen, toggleMenu] = usePopupMenu();

	return (
		<div className="sidebar__footer">
			<Avatar />
			<p className="username">Armando Cruz</p>
			<button className="btn--icon relative" onClick={toggleMenu}>
				<ChevronDown />
			</button>
			<Menu isOpen={isMenuOpen} />
		</div>
	);
}

export default SidebarFooter;
