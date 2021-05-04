import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import Loader from '../components/ui/Loader';

function AppRouter() {
	const { verifyToken, auth } = useContext(AuthContext);

	useEffect(() => {
		verifyToken();
	}, [verifyToken]);

	if (auth.checking) {
		return (
			<div className="overlay">
				<Loader />
			</div>
		);
	}

	return (
		<Router basename="/chat-group">
			<div className="app">
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<PublicRoutes
						path="/auth"
						component={AuthRouter}
						isLoggedIn={auth.logged}
					/>
					<PrivateRoutes
						path="/"
						component={PrivateRouter}
						isLoggedIn={auth.logged}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
