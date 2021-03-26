import { usePopupMenu } from '../../hooks/usePopupMenu';
import Avatar from '../ui/Avatar';
import ProfileMenu from '../ui/ProfileMenu';

function ProfileHeader() {
	const [isMenuOpen, toggleMenu] = usePopupMenu();

	return (
		<header className="header">
			<Avatar />
			<p className="user-name">Armando Cruz</p>
			<button className="btn--icon btn--show-more" onClick={toggleMenu}>
				<span>&#x25b2;</span>
			</button>
			<ProfileMenu isOpen={isMenuOpen} />
		</header>
	);
}

export default ProfileHeader;
