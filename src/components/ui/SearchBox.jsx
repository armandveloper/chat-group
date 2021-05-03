import React from 'react';
import { Search } from 'react-feather';
import './SearchBox.css';

function SearchBox() {
	return (
		<div className="searchbox">
			<button type="submit" className="btn--icon" title="Search Channel">
				<Search />
			</button>
			<input
				type="text"
				className="searchbox__input"
				placeholder="Search"
				aria-label="Search"
			/>
		</div>
	);
}

export default SearchBox;
