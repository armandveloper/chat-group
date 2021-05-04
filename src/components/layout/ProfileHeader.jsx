import PropTypes from 'prop-types';
import { usePopupMenu } from '../../hooks/usePopupMenu';
import Avatar from '../ui/Avatar';
import ProfileMenu from '../ui/ProfileMenu';

function ProfileHeader({ photo, username }) {
	const [isMenuOpen, toggleMenu] = usePopupMenu();

	return (
		<header className="header">
			<Avatar name={username} url={photo} />
			<p className="user-name">{username}</p>
			<button className="btn--icon btn--show-more" onClick={toggleMenu}>
				<span>&#x25b2;</span>
			</button>
			<ProfileMenu isOpen={isMenuOpen} />
		</header>
	);
}

ProfileHeader.propTypes = {
	username: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
};

export default ProfileHeader;
