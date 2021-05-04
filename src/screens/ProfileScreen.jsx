import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Avatar from '../components/ui/Avatar';
import ProfileHeader from '../components/layout/ProfileHeader';
import { AppContext } from '../context/AppContext';

function ProfileScreen() {
	const { user, getUser } = useContext(AppContext);

	useEffect(() => {
		if (!user) {
			getUser();
		}
	}, [user, getUser]);

	return (
		<div className="profile">
			<ProfileHeader
				username={user?.name || ''}
				photo={user?.photo || ''}
			/>
			<h1 className="h1">Personal info</h1>
			<p className="description">Basic info, like your name and photo</p>
			<div className="profile__container">
				<div className="profile__section profile__section--top">
					<div>
						<h2>Profile</h2>
						<p>Some info may be visible to other people</p>
					</div>
					<Link to="/profile/edit" className="btn btn--outline">
						Edit
					</Link>
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Photo</h3>
					<Avatar url={user?.photo} name={user?.name} />
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Name</h3>
					<p className="profile__section-text">{user?.name}</p>
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Bio</h3>
					<p className="profile__section-text">{user?.bio}</p>
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Phone</h3>
					<p className="profile__section-text">{user?.phone}</p>
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Email</h3>
					<p className="profile__section-text">{user?.email}</p>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
