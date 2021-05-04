import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'react-feather';
import { AuthContext } from '../../context/AuthContext';
import styles from './Menu.module.css';

function Menu({ isOpen }) {
	const { logout } = useContext(AuthContext);

	return (
		<div className={`${styles.menu} ${isOpen ? styles.visible : ''}`}>
			<Link to="/profile" className={styles.option}>
				<User className={styles.icon} />
				Profile
			</Link>
			<div className="line"></div>
			<button className={styles.option} onClick={logout}>
				<LogOut className={styles.icon} />
				Logout
			</button>
		</div>
	);
}

export default Menu;
