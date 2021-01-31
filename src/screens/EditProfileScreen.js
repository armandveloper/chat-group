import React, { useRef } from 'react';
import './Profile.css';
import Avatar from '../components/ui/Avatar';
import { Camera, ChevronLeft, Twitter, LogOut, User } from 'react-feather';
import { Link } from 'react-router-dom';

function EditProfileScreen() {
	const popupRef = useRef(null);

	const toggleMenu = ({ target }) => {
		target.firstElementChild.classList.toggle('rotate');
		popupRef.current.classList.toggle('popup-menu--visible');
	};
	return (
		<div className="profile">
			<header className="header">
				<Avatar />
				<p className="user-name">Armando Cruz</p>
				<button
					className="btn--icon btn--show-more"
					onClick={toggleMenu}
				>
					<span>&#x25b2;</span>
					<div className="popup-menu" ref={popupRef}>
						<div className="popup-menu__option">
							<User className="popup-menu__icon" />
							Profile
						</div>
						<div className="popup-menu__option">
							<Twitter className="popup-menu__icon" />
							Twitter
						</div>
						<div className="line"></div>
						<div className="popup-menu__option">
							<LogOut className="popup-menu__icon" />
							Logout
						</div>
					</div>
				</button>
			</header>
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
								<div className="image"></div>
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
