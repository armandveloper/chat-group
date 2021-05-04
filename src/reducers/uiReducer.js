import types from '../types';

const uiReducer = (state, action) => {
	switch (action.type) {
		case types.UI_SET_lOADING:
			return { ...state, loading: action.payload };
		case types.UI_SET_MODAL_OPEN:
			return { ...state, isModalOpen: action.payload };
		case types.UI_SET_SIDEBAR_VIEW:
			return { ...state, sidebarView: action.payload };
		case types.UI_SET_SHOW_SIDEBAR:
			return { ...state, showSidebar: action.payload };
		case types.UI_SET_MESSAGE:
			return { ...state, message: action.payload };
		default:
			return state;
	}
};

export default uiReducer;
