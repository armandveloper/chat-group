import React, { useContext, useRef } from 'react';
import { UiContext } from '../../context/UiContext';
import './Modal.css';

function Modal({ isOpen }) {
	const { closeModal } = useContext(UiContext);

	const modalRef = useRef(null);

	const handleCloseModal = ({ target }) => {
		if (target.classList.contains('overlay')) {
			modalRef.current.classList.add('modal--close');
			modalRef.current.addEventListener('animationend', () =>
				closeModal()
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		modalRef.current.classList.add('modal--close');
		modalRef.current.addEventListener('animationend', () => closeModal());
	};

	return (
		isOpen && (
			<div className="overlay" onClick={handleCloseModal}>
				<div className="modal" ref={modalRef}>
					<h2 className="modal__title">New Channel</h2>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							className="modal__input"
							placeholder="Channel name"
							aria-label="Channel name"
						/>
						<textarea
							className="modal__textarea"
							placeholder="Channel description"
							aria-label="Channel description"
						></textarea>
						<button className="btn btn--blue">Save</button>
					</form>
				</div>
			</div>
		)
	);
}

export default Modal;
