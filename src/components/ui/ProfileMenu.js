import { LogOut, User, Users } from 'react-feather';
import './Menu.css';

function ProfileMenu({ isOpen }) {
	return (
		<div
			className={`popup-menu popup-menu--profile ${
				isOpen ? 'popup-menu--visible' : ''
			}`}
		>
			<div className="popup-menu__option">
				<User className="popup-menu__icon" />
				My Profile
			</div>
			<div className="popup-menu__option">
				<Users className="popup-menu__icon" />
				Group Chat
			</div>
			<div className="line"></div>
			<div className="popup-menu__option">
				<LogOut className="popup-menu__icon" />
				Logout
			</div>
		</div>
	);
}

export default ProfileMenu;
