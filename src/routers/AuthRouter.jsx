import { Redirect, Route, Switch } from 'react-router-dom';
import AuthScreen from '../screens/AuthScreen';

const AuthRouter = () => {
	return (
		<>
			<Switch>
				<Route path="/auth/login" component={AuthScreen} />
				<Route path="/auth/register" component={AuthScreen} />
				<Redirect to="/auth/login" />
			</Switch>
		</>
	);
};

export default AuthRouter;
