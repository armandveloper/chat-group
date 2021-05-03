import { Redirect, Route, Switch } from 'react-router-dom';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const PrivaeteRouter = () => {
	return (
		<>
			<Switch>
				<Route path="/profile/edit" component={EditProfileScreen} />
				<Route path="/profile" component={ProfileScreen} />
				<Route path="/" component={ChatScreen} />
				<Redirect to="/" />
			</Switch>
		</>
	);
};

export default PrivaeteRouter;
