import { UiProvider } from './context/UiContext';
import AppRouter from './routers/AppRouter';

function App() {
	return (
		<UiProvider>
			<AppRouter />
		</UiProvider>
	);
}

export default App;
