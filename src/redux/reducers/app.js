import { translation } from '../../global';

const getInitState = () => ({
	drawerOpen: false,
	loading: [],
	languages: translation.getLanguages(),
	login: {
		data: {
			roles: []
		},
		userAvatar: false,
		fetching: false
	}
})

export const types = {
	drawerToggle: 'APP_DRAWER_TOGGLE',
	languageSet: 'APP_LANGUAGE_SET',
	languageRegister: 'APP_LANGUAGE_REGISTER',
	login: 'APP_LOGIN',
	login_success: 'APP_LOGIN_SUCCESS',
	logout: 'APP_LOGOUT',
	useravatar: 'APP_USER_AVATAR',
	loading: 'APP_LOADING',
	loading_done: 'APP_LOADING_DONE'
}

const layout = (state = getInitState(), action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case types.loading: {
			newState.loading.push(action.payload);
			break;
		}
		case types.loading_done: {
			newState.loading.splice(newState.loading.findIndex(item => item === action.payload), 1);
			break;
		}
		case types.drawerToggle: {
			if ('payload' in action)
				newState.drawerOpen = action.payload;
			else 
				newState.drawerOpen = !newState.drawerOpen;
			break;
		}
		case types.login: {
			newState.login = {
				data: {},
				fetching: true
			}
			break;
		}
		case types.login_success: {
			newState.login = {
				data: action.payload,
				fetching: true
			}
			break;
		}
		case types.logout: {
			newState.login = {
				data: {},
				fetching: false
			};
			break;
		}
		case types.languageSet: {
			translation.selectLanguage(action.payload);
			break;
		}
		case types.languageRegister: {
			translation.registerTranslation(action.payload.language, action.payload.translation);
			newState.languages = translation.getLanguages();
			break;
		}
		case types.useravatar: {
			newState.login.userAvatar = action.payload;
			break;
		}
		default:
			break;
	}
	return newState;
}

export default layout;