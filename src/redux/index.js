import { combineReducers } from 'redux';
import { reducer as toastReducer } from 'react-redux-toastr';

import app from '../redux/reducers/app';
import store from './reducers/reducerFile'

const appState = combineReducers({
	app: app,
	toastr: toastReducer,
	store
})

export default appState;