import { createContext, useReducer } from 'react';
import uiReducer from '../reducers/uiReducer';

const initialState = {
	loading: false,
	message: null,
};

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	const value = useReducer(uiReducer, initialState);

	return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
