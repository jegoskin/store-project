class Config {
	constructor() {
		this.data = require('../../app.config').default;
		document.title = this.data.app.page_title;
		this.roles = this.data.roles;
	}
	getVersion() {
		return this.data.app.version;
	}
	isLogin() {
		return this.data.login
	}
	ignoreRoles() {
		return this.data.ignoreRoles
	}
	getRestUrl() {
		let rest = this.data.server.rest;
		return `${rest.dns}/${rest.url}`;
	}
	getAuthUrl() {
		let auth = this.data.server.authentification;
		return `${auth.dns}/${auth.url}`;
	}
	getTransUrl() {
		let trans = this.data.server.translation;
		return `${trans.dns}/${trans.url}`;
	}
}

const config = new Config();
export default config;