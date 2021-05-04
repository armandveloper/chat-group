import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User, Users } from 'react-feather';
import { AuthContext } from '../../context/AuthContext';
import styles from './Menu.module.css';

function ProfileMenu({ isOpen }) {
	const { logout } = useContext(AuthContext);

	return (
		<div
			className={`${styles.menu} ${styles.profile} ${
				isOpen ? styles.visible : ''
			}`}
		>
			<Link className={styles.option} to="/profile">
				<User className={styles.icon} />
				My Profile
			</Link>
			<Link to="/" className={styles.option}>
				<Users className={styles.icon} />
				Group Chat
			</Link>
			<div className="line"></div>
			<button className={styles.option} onClick={logout}>
				<LogOut className={styles.icon} />
				Logout
			</button>
		</div>
	);
}

export default ProfileMenu;
