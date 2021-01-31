import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthScreen from '../screens/AuthScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

function AppRouter() {
	return (
		<Router basename="/chat-group">
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route exact={true} path="/login">
						<AuthScreen />
					</Route>
					<Route exact={true} path="/register">
						<AuthScreen />
					</Route>
					<Route exact={true} path="/profile/edit">
						<EditProfileScreen />
					</Route>
					<Route exact={true} path="/profile">
						<ProfileScreen />
					</Route>
					<Route exact={true} path="/">
						<ChatScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
