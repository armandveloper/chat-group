import { Search } from 'react-feather';
import styles from './SearchBox.module.css';

function SearchBox() {
	return (
		<div className={styles.box}>
			<button type="submit" className="btn--icon" title="Search Channel">
				<Search />
			</button>
			<input
				type="text"
				className={styles.input}
				placeholder="Search"
				aria-label="Search"
			/>
		</div>
	);
}

export default SearchBox;
