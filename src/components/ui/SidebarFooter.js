import React, { useRef } from 'react';
import { ChevronDown, LogOut, Twitter, User } from 'react-feather';
import Avatar from '../ui/Avatar';
import './SidebarFooter.css';

function SidebarFooter() {
	const popupRef = useRef(null);

	const toggleMenu = () => {
		popupRef.current.classList.toggle('popup-menu--visible');
	};

	return (
		<div className="sidebar__footer">
			<Avatar />
			<p className="username">Armando Cruz</p>
			<button className="btn--icon relative" onClick={toggleMenu}>
				<ChevronDown />
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
		</div>
	);
}

export default SidebarFooter;
