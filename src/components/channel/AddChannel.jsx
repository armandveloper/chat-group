import { useContext } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { UiContext } from '../../context/UiContext';
import { AppContext } from '../../context/AppContext';
import Loader from '../ui/Loader';
import styles from './AddChannel.module.css';

const initialValues = {
	name: '',
	description: '',
};

const ChannelSchema = Yup.object().shape({
	name: Yup.string().required('The channel name is required'),
	description: Yup.string().required('The channel description is required'),
});

function AddChannel() {
	const { loading } = useContext(UiContext);

	const { createChannel } = useContext(AppContext);

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

export default AddChannel;
