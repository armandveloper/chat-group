import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Camera, ChevronLeft } from 'react-feather';
import { AppContext } from '../context/AppContext';
import './Profile.css';
import ProfileHeader from '../components/layout/ProfileHeader';
import Avatar from '../components/ui/Avatar';
import Alert from '../components/ui/Alert';
import { UiContext } from '../context/UiContext';
import Loader from '../components/ui/Loader';
import types from '../types';

const acceptedFiles = ['image/png', 'image/jpeg'];

const UserSchema = Yup.object().shape({
	name: Yup.string().required('Your Name is Required'),
});

function EditProfileScreen() {
	const [uiState, uiDispatch] = useContext(UiContext);
	const { message, loading } = uiState;

	const { user, getUser, editProfile, editPhoto } = useContext(AppContext);

	const showAlert = (alert) => {
		uiDispatch({
			type: types.UI_SET_MESSAGE,
			payload: alert,
		});
	};

	const formik = useFormik({
		initialValues: {
			name: user?.name || '',
			bio: user?.bio || '',
			phone: user?.phone || '',
		},
		enableReinitialize: true,
		validationSchema: UserSchema,
		onSubmit: (values) => {
			editProfile(values);
		},
	});

	useEffect(() => {
		if (!user) {
			getUser();
		}
	}, [user, getUser]);

	const photoRef = useRef();

	const handleEditPhoto = () => {
		console.log(photoRef.current);
		if (!photoRef.current) {
			showAlert({
				text: 'To update the profile picture. Select a new one',
				severity: 'error',
			});
			return;
		}
		editPhoto(photoRef.current);
	};

	const handlePhotoChange = ({ target }) => {
		const file = target.files[0];
		if (!acceptedFiles.includes(file.type)) {
			showAlert({
				text: 'Image must be a .png or .jpg',
				severity: 'warning',
			});
			return;
		}
		// Si pesa más de 10 MB
		const size = file.size / 1000 / 1000;
		if (size > 10) {
			showAlert({
				text: 'Maximum size is 10 MB',
				severity: 'warning',
			});
			return;
		}
		photoRef.current = file;
	};

	return (
		<div className="profile">
			<Alert
				show={message !== null}
				message={message?.text || ''}
				severity={message?.severity || 'error'}
				autoHideDuration={3000}
			/>
			<ProfileHeader
				username={user?.name || ''}
				photo={user?.photo || ''}
			/>
			<div className="container">
				<Link to="/profile" className="btn--icon btn--back">
					<ChevronLeft />
					<span className="btn__text">Back</span>
				</Link>
			</div>
			<div className="profile__container">
				<div className="profile__container-inner">
					<h1 className="h1 text-left">Change Info</h1>
					<p className="description text-left">
						Changes will be reflected to every services
					</p>
					<form
						className="profile__form"
						autoComplete="off"
						onSubmit={formik.handleSubmit}
					>
						<div className="form__image">
							<div className="profile__image-container">
								<Avatar url={user?.photo} name={user?.name} />
								<label htmlFor="image">
									<Camera size={32} />
								</label>
							</div>
							<label
								htmlFor="image"
								className="form__image-label"
							>
								Change photo
							</label>
							<input
								multiple={false}
								accept="image/png,image/jpeg"
								onChange={handlePhotoChange}
								type="file"
								name="image"
								id="image"
								className="hidden"
							/>
							<button
								onClick={handleEditPhoto}
								type="button"
								className="btn btn--blue"
								disabled={loading}
							>
								{loading ? <Loader /> : 'Update Photo'}
							</button>
						</div>
						<div className="form__group">
							<label htmlFor="name" className="form__label">
								Name
							</label>
							<input
								type="text"
								className="form__control"
								id="name"
								name="name"
								value={formik.values.name}
								onChange={formik.handleChange}
							/>
							{formik.errors.name && formik.touched.name ? (
								<div className="form__feedback--error">
									{formik.errors.name}
								</div>
							) : null}
						</div>
						<div className="form__group">
							<label htmlFor="bio" className="form__label">
								Bio
							</label>
							<textarea
								className="form__control"
								id="bio"
								name="bio"
								value={formik.values.bio}
								onChange={formik.handleChange}
							/>
						</div>
						<div className="form__group">
							<label htmlFor="phone" className="form__label">
								Phone
							</label>
							<input
								type="tel"
								className="form__control"
								id="phone"
								name="phone"
								value={formik.values.phone}
								onChange={formik.handleChange}
							/>
						</div>
						<button
							type="submit"
							className="btn btn--blue"
							disabled={loading}
						>
							{loading ? <Loader /> : 'Save'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditProfileScreen;
