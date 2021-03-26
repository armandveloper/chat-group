import { useState } from 'react';

export const usePopupMenu = () => {
	const [isOpen, setOpen] = useState(false);

	const openMenu = () => setOpen(true);

	const closeMenu = () => setOpen(false);

	const toggleMenu = () => setOpen(!isOpen);

	return [isOpen, toggleMenu, openMenu, closeMenu];
};
