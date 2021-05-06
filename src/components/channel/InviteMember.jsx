// import { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { WithContext as ReactTags } from 'react-tag-input';
import Loader from '../ui/Loader';
import styles from './AddChannel.module.css';
import { fetchWithToken } from '../../helpers/fetch';
// import { AppContext } from '../../context/AppContext';

const initialValues = {
	emails: [],
};

const KeyCodes = {
	space: 32,
	enter: 13,
};

const delimiters = [KeyCodes.space, KeyCodes.enter];

function InviteMember({ loading, channel, setLoading, closeModal, showAlert }) {
	// const { auth } = useContext(AuthContext);
	// const { user } = useContext(AppContext);

	// const [uiState] = useContext(UiContext);
	// const { loading } = uiState;

	// const { createChannel } = useContext(AppContext);

	const inviteUsers = async (emails) => {
		setLoading(true);
		try {
			const resp = await fetchWithToken(
				`channels/${channel._id}`,
				{ emails },
				'POST'
			);
			const body = await resp.json();
			if (!body.success) {
				setLoading(false);
				closeModal();
				showAlert({ text: body.msg, severity: 'error' });
				return;
			}
			closeModal();
			showAlert({
				text: 'Invitations sent',
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

	const handleInvite = ({ emails }) => {
		const invitations = emails.map((email) => email.text);
		inviteUsers(invitations);
	};

	// Método para validar que los correos ingresados no sean miembros del canal
	function isUnique(message, path) {
		return this.test('isUnique', message, function (text) {
			const members = channel.members.map((member) => member.email);

			const isUnique = !members.includes(text);

			if (isUnique) {
				return true;
			}

			return this.createError({
				path: 'emails',
				message: message,
			});
		});
	}

	Yup.addMethod(Yup.string, 'isUnique', isUnique);

	const MembersSchema = Yup.object().shape({
		emails: Yup.array()
			.of(
				Yup.object().shape({
					id: Yup.string(),
					text: Yup.string()
						.email('A valid email is required')
						.required("Email can't be empty")
						.isUnique(
							'Add emails from people who do not belongs to the channel'
						),
				})
			)
			.min(1, 'Type at least one email'),
	});

	const formik = useFormik({
		initialValues,
		validationSchema: MembersSchema,
		onSubmit: handleInvite,
	});

	// formik.setFieldValue()

	const { emails } = formik.values;

	const handleAddition = (email) => {
		formik.setFieldValue('emails', [...emails, email]);
	};

	const handleDelete = (i) => {
		formik.setFieldValue(
			'emails',
			emails.filter((_, index) => index !== i)
		);
	};

	return (
		<>
			<h2 className={styles.title}>Invite members</h2>
			<form onSubmit={formik.handleSubmit} autoComplete="off">
				<label htmlFor="members">Type the email address</label>
				<ReactTags
					classNames={{
						tags: `${styles.textarea} ${styles.tags}`,
						tag: styles.tag,
						remove: styles.remove,
						selected: styles.selected,
						tagInput: styles.tagInput,
						tagInputField: styles.tagInputField,
					}}
					tags={emails}
					allowDragDrop={false}
					handleAddition={handleAddition}
					handleDelete={handleDelete}
					delimiters={delimiters}
					id="members"
					name="members"
					placeholder={
						emails.length === 0
							? 'Press space or enter to add a new email'
							: ''
					}
				/>

				{formik.errors.emails ? (
					<div className="form__feedback--error">
						{typeof formik.errors.emails === 'string'
							? formik.errors.emails
							: 'A valid email is required'}
					</div>
				) : null}
				<button
					type="submit"
					className={`btn btn--blue ${styles.btn}`}
					disabled={loading}
				>
					{loading ? <Loader /> : 'Invite'}
				</button>
			</form>
		</>
	);
}

InviteMember.propTypes = {
	loading: PropTypes.bool.isRequired,
	channel: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		members: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				email: PropTypes.string.isRequired,
				photo: PropTypes.string.isRequired,
			})
		).isRequired,
	}),
	setLoading: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
	showAlert: PropTypes.func.isRequired,
};

export default InviteMember;
