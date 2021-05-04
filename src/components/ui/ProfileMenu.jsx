import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User, Users } from 'react-feather';
import { AuthContext } from '../../context/AuthContext';
import './Menu.css';

function ProfileMenu({ isOpen }) {
	const { logout } = useContext(AuthContext);

	return (
		<div
			className={`popup-menu popup-menu--profile ${
				isOpen ? 'popup-menu--visible' : ''
			}`}
		>
			<Link className="popup-menu__option" to="/profile">
				<User className="popup-menu__icon" />
				My Profile
			</Link>
			<Link to="/" className="popup-menu__option">
				<Users className="popup-menu__icon" />
				Group Chat
			</Link>
			<div className="line"></div>
			<button className="popup-menu__option" onClick={logout}>
				<LogOut className="popup-menu__icon" />
				Logout
			</button>
		</div>
	);
}

export default ProfileMenu;
