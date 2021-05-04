import { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Loader from '../ui/Loader';
import styles from './AddChannel.module.css';
import { AuthContext } from '../../context/AuthContext';
import { fetchWithToken } from '../../helpers/fetch';

const initialValues = {
	name: '',
	description: '',
};

const ChannelSchema = Yup.object().shape({
	name: Yup.string().required('The channel name is required'),
	description: Yup.string().required('The channel description is required'),
});

function AddChannel({
	loading,
	setLoading,
	closeModal,
	showAlert,
	setChannels,
}) {
	const { auth } = useContext(AuthContext);
	// const [uiState] = useContext(UiContext);
	// const { loading } = uiState;

	// const { createChannel } = useContext(AppContext);

	const createChannel = async (data) => {
		setLoading(true);
		try {
			const resp = await fetchWithToken(
				'channels',
				{ ...data, creator: auth.uid },
				'POST'
			);
			const body = await resp.json();
			if (!body.success) {
				setLoading(false);
				closeModal();
				showAlert({ text: body.msg, severity: 'error' });
				return;
			}
			setChannels((channels) => [...channels, body.channel]);
			closeModal();
			showAlert({
				text: 'The channel has been created',
				severity: 'success',
			});
		} catch (err) {
			console.log(err);
			closeModal();
			showAlert({
				text: 'An unexpected error occurred. Please try again later',
				severity: 'error',
			});
		} finally {
			setLoading(false);
		}
	};

	const handleNewChannel = (values) => {
		createChannel(values);
	};

	const formik = useFormik({
		initialValues,
		validationSchema: ChannelSchema,
		onSubmit: handleNewChannel,
	});

	return (
		<>
			<h2 className={styles.title}>New Channel</h2>
			<form onSubmit={formik.handleSubmit} autoComplete="off">
				<input
					type="text"
					className={styles.input}
					placeholder="Channel name"
					aria-label="Channel name"
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
				/>
				{formik.errors.name && formik.touched.name ? (
					<div className="form__feedback--error">
						{formik.errors.name}
					</div>
				) : null}
				<textarea
					className={styles.textarea}
					placeholder="Channel description"
					aria-label="Channel description"
					value={formik.values.description}
					onChange={formik.handleChange}
					name="description"
				/>
				{formik.errors.description && formik.touched.description ? (
					<div className="form__feedback--error">
						{formik.errors.description}
					</div>
				) : null}
				<button
					type="submit"
					className={`btn btn--blue ${styles.btn}`}
					disabled={loading}
				>
					{loading ? <Loader /> : 'Save'}
				</button>
			</form>
		</>
	);
}

AddChannel.propTypes = {
	loading: PropTypes.bool.isRequired,
	setLoading: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
	showAlert: PropTypes.func.isRequired,
	setChannels: PropTypes.func.isRequired,
};

export default AddChannel;
