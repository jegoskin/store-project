import config from './lib/base/Config';
//Classes
import { UserPhoto } from '@adler-it/webstack-utilities';
import { Api } from '@adler-it/webstack-asp-api';
import { Translation } from '@adler-it/webstack-translation';
//Actions
import { languageRegister } from './redux/actions/app';
//Function
import { store } from './index';
import { toastr } from 'react-redux-toastr';

//Adler Utilities
export const userPhoto = new UserPhoto(config.data.utility.userPhoto.url, config.data.utility.userPhoto.extension);

//Adler Api
export const api = new Api(config.getRestUrl(), config.getAuthUrl(), config.getTransUrl());
api.setErrHandling((err) => toastr.error(err.name, err.message));

//Adler Translation
export const translation = new Translation(config.data.lang.base);
api.getTranslations()
	.then(translations => {
		translations.forEach(translation => {
			store.dispatch(languageRegister(translation.language, translation.data))
		})
	})
/**
 * Translate phrase if exist. If not return origin and clg missing translation.
 * @param {string} phrase 
 * @return {string}
 */
export const trans = (phrase = '') => translation.translate(phrase);

//Function
/**
 * Return if actual user is in role or not.
 * @param {string} role 
 * @return {boolean}
 */
export const isInRole = (role = '', roles = store.getState().app.login.data.roles) => {
	if (config.roles.findIndex(item => item === role) === -1) {
		alert(`Role: '${role}' does not exist in config!`);
	}
	if (config.ignoreRoles()) {
		return true;
	} else if (roles) {
		let index = roles.findIndex(item => item === role);
		return index === -1? false : true;
	} else{
		return false;
	}
}
