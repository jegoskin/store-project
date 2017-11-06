import { combineReducers } from 'redux';
import { reducer as toastReducer } from 'react-redux-toastr';

import app from '../redux/reducers/app';

const appState = combineReducers({
	app: app,
	toastr: toastReducer
})

export default appState;