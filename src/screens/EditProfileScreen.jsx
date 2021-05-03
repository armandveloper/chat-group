import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, ChevronLeft } from 'react-feather';
import { AuthContext } from '../context/AuthContext';
import { fetchWithToken } from '../helpers/fetch';
import './Profile.css';
import ProfileHeader from '../components/layout/ProfileHeader';
import Avatar from '../components/ui/Avatar';

function EditProfileScreen() {
	const { auth } = useContext(AuthContext);

	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			const resp = await fetchWithToken(`/users/${auth.uid}`);
			const data = await resp.json();
			console.log(data);
			setUser(data.user);
		};
		getUser();
	}, [auth]);

	return (
		<div className="profile">
			<ProfileHeader />
			<div className="container">
				<Link to="/profile" className="btn--icon btn--back">
					<ChevronLeft />
					<span className="btn__text">Back</span>
				</Link>
			</div>
			<div className="profile__container">
				<div className="profile__container-inner">
					<h1 className="h1 text-left">Change Info</h1>
					<p className="description text-left">
						Changes will be reflected to every services
					</p>
					<form className="profile__form" autoComplete="off">
						<div className="form__image">
							<div className="profile__image-container">
								<Avatar url={user?.photo} name={user?.name} />
								<label htmlFor="image">
									<Camera size={32} />
								</label>
							</div>
							<label
								htmlFor="image"
								className="form__image-label"
							>
								Change photo
							</label>
							<input
								type="file"
								name="image"
								id="image"
								className="hidden"
							/>
						</div>
						<div className="form__group">
							<label htmlFor="name" className="form__label">
								Name
							</label>
							<input
								type="text"
								className="form__control"
								id="name"
								name="name"
								value={user?.name}
								readnOnly
							/>
						</div>
						<div className="form__group">
							<label htmlFor="bio" className="form__label">
								Bio
							</label>
							<textarea
								className="form__control"
								id="bio"
								name="bio"
								value={user?.bio}
								readnOnly
							/>
						</div>
						<div className="form__group">
							<label htmlFor="phone" className="form__label">
								Phone
							</label>
							<input
								type="tel"
								className="form__control"
								id="phone"
								name="phone"
								value={user?.phone}
								readnOnly
							/>
						</div>
						<button type="submit" className="btn btn--blue">
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditProfileScreen;
