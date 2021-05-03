import React from 'react';
import Avatar from '../ui/Avatar';
import './Message.css';

function Message(props) {
	// const { contact, datetime, text, avatar } = props;
	return (
		<div className="message">
			<Avatar />
			<div className="message__info">
				<div className="message__metadata">
					<p className="message__sender">Armando Cruz</p>
					<small className="message__date-time">
						yesterday at 2:29 PM
					</small>
				</div>
				<p className="message__text">
					Lorem ipsum dolor 🤦‍♂️sit, amet consectetur adipisicing elit.
					Labore dolorum voluptas illo praesentium nulla👆 excepturi
					aperiam magni veniam dolore sequi! 👱‍♀️
				</p>
			</div>
		</div>
	);
}

export default Message;
