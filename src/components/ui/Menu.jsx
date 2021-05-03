import { LogOut, User } from 'react-feather';
import './Menu.css';

function Menu({ isOpen }) {
	return (
		<div className={`popup-menu ${isOpen ? 'popup-menu--visible' : ''}`}>
			<div className="popup-menu__option">
				<User className="popup-menu__icon" />
				Profile
			</div>
			<div className="line"></div>
			<div className="popup-menu__option">
				<LogOut className="popup-menu__icon" />
				Logout
			</div>
		</div>
	);
}

export default Menu;
