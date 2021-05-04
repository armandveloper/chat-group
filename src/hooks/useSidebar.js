import { useRef } from 'react';
import styles from '../components/layout/Sidebar.module.css';

// Custom hook use in mobile design

export const useSidebar = () => {
	const sidebarRef = useRef();

	const showSidebar = () => {
		sidebarRef.current.classList.add(styles.overlayShow);
		sidebarRef.current.firstElementChild.classList.add(styles.sidebarShow);
	};

	const hideSidebar = () => {
		sidebarRef.current.classList.remove(styles.overlayShow);
		sidebarRef.current.firstElementChild.classList.remove(
			styles.sidebarShow
		);
	};

	const toggleSidebar = () => {
		sidebarRef.current.classList.toggle(styles.overlayShow);
		sidebarRef.current.firstElementChild.classList.toggle(
			styles.sidebarShow
		);
	};

	return [sidebarRef, toggleSidebar, showSidebar, hideSidebar];
};
