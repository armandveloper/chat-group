import { AuthProvider } from './context/AuthContext';
import { UiProvider } from './context/UiContext';
import AppRouter from './routers/AppRouter';

function App() {
	return (
		<UiProvider>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</UiProvider>
	);
}

export default App;
