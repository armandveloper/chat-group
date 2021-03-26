import { useRef } from 'react';

// Custom hook use in mobile design

export const useSidebar = () => {
	const sidebarRef = useRef();

	const showSidebar = () => {
		sidebarRef.current.classList.add('sidebar--show');
	};

	const hideSidebar = () => {
		sidebarRef.current.classList.remove('sidebar--show');
	};

	const toggleSidebar = () => {
		sidebarRef.current.classList.toggle('sidebar--show');
	};

	return [sidebarRef, toggleSidebar, showSidebar, hideSidebar];
};
