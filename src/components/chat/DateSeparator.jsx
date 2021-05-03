import React from 'react';
import './DateSeparator.css';

function DateSeparator({ date }) {
	return (
		<div className="date-separator">
			<small className="date-separator__date">{date}</small>
		</div>
	);
}

export default DateSeparator;
