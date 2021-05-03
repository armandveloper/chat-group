import PropTypes from 'prop-types';
import './Avatar.css';

function Avatar({ url, name }) {
	if (!url) {
		return <div className="avatar-div" />;
	}
	return <img className="avatar" src={url} alt={name} />;
}

Avatar.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
};

export default Avatar;
