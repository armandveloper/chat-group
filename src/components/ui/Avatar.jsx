import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

function Avatar({ url, name }) {
	// if (!url) return null;

	if (!url) {
		return <div className={styles.div} />;
	}
	return <img className={styles.avatar} src={url} alt={name} />;
}

Avatar.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
};

export default Avatar;
