const config = {
	login: false,
	ignoreRoles: true,
	roles: [
		'user',
		'debug'
	],
	app: {
		dns: 'blank',
		version: 'v0.0.1',
		page_title: 'Offline Store',
		header: 'Offline Store'
	},
	lang: {
		base: 'en'
	},
	server: {
		rest: {
			dns: '',
			url: ''
		},
		authentification: {
			dns: '',
			url: ''	
		},
		translation: {
			dns: '',
			url: ''
		}
	},
	utility: {
		userPhoto: {
			url: 'http://portal.adler.local/img/foto_users/',
			extension: '_tn.jpg'
		}
	}
}

export default config;