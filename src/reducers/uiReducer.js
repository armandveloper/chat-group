import types from '../types';

const uiReducer = (state, action) => {
	switch (action.type) {
		case types.UI_SET_LOADING:
			return { ...state, loading: action.payload };
		case types.UI_SET_MESSAGE:
			return { ...state, message: action.payload };
		default:
			return state;
	}
};

export default uiReducer;
