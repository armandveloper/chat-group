import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'react-feather';
import { AuthContext } from '../../context/AuthContext';
import './Menu.css';

function Menu({ isOpen }) {
	const { logout } = useContext(AuthContext);

	return (
		<div className={`popup-menu ${isOpen ? 'popup-menu--visible' : ''}`}>
			<Link to="/profile" className="popup-menu__option">
				<User className="popup-menu__icon" />
				Profile
			</Link>
			<div className="line"></div>
			<button className="popup-menu__option" onClick={logout}>
				<LogOut className="popup-menu__icon" />
				Logout
			</button>
		</div>
	);
}

export default Menu;
