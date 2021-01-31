import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Avatar from '../components/ui/Avatar';

function ProfileScreen() {
	return (
		<div className="profile">
			<header className="header">
				<Avatar />
				<p className="user-name">Armando Cruz</p>
				<button className="btn--icon btn--show-more">&#x25b2;</button>
			</header>
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
					<Avatar />
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Name</h3>
					<p className="profile__section-text">Armando Cruz</p>
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Bio</h3>
					<p className="profile__section-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aut incidunt laboriosam provident eaque repellendus
						optio sint totam, beatae amet perspiciatis molestias
						nisi ipsum temporibus, itaque mollitia, quam expedita
						reprehenderit. A!
					</p>
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Phone</h3>
					<p className="profile__section-text">1920495231</p>
				</div>
				<div className="profile__section">
					<h3 className="profile__section-title">Email</h3>
					<p className="profile__section-text">19307021@gmail.com</p>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
