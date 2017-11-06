import { toastr } from 'react-redux-toastr';
import { api, userPhoto, trans } from '../../global';
const types = require('../reducers/app').types;

export const drawerToggle = (show = null) => {
	let action = {
		type: types.drawerToggle
	}
	if (show === true)
		action.payload = true;
	if (show === false)
		action.payload = false;
	return action;
}

export const load = (id = "loading") => ({
	type: types.loading,
	payload: id
})
export const loadDone = (id = "loading") => ({
	type: types.loading_done,
	payload: id
})

export const languageSet = (language = "") => ({
	type: types.languageSet,
	payload: language
})

export const languageRegister = (language = "", translation = {}) => ({
	type: types.languageRegister,
	payload: {
		language,
		translation
	}
})

export const login = ({ username, password }) => (dispatch) => {
	dispatch(load(trans('Logging in...')));
	dispatch({
		type: types.login
	})
	api.login(username, password)
		.then(data => {
			dispatch(loadDone(trans('Logging in...')));
			dispatch({
				type: types.login_success,
				payload: data
			})
			toastr.success("Login", "Logged in.");
			return dispatch(useravatar())
		})
		.catch(err => toastr.error(err.name, err.message))
}

export const logout = () => (dispatch) => {
	dispatch(load(trans('Logging out...')));
	dispatch({
		type: types.login
	})
	api.logout()
		.then(data => {
			dispatch(loadDone(trans('Logging out...')));
			dispatch({
				type: types.logout
			})
			toastr.success("Login", "Logged out.");
		})
		.catch(err => toastr.error(err.name, err.message))
}

export const useravatar = () => (dispatch, getState) => {
	let username = getState().app.login.data.username;
	userPhoto.isUserPhoto(username)
		.then(() => dispatch({
			type: types.useravatar,
			payload: true
		}))
		.catch(() => {
			toastr.warning("Avatar", "User picture not found!")
			dispatch({
				type: types.useravatar,
				payload: false
			})
		})
}