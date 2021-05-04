import { UiProvider } from './context/UiContext';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import AppRouter from './routers/AppRouter';

function App() {
	return (
		<UiProvider>
			<AuthProvider>
				<AppProvider>
					<AppRouter />
				</AppProvider>
			</AuthProvider>
		</UiProvider>
	);
}

export default App;
