const config = {
	login: true,
	ignoreRoles: false,
	roles: [
		'user',
		'admin',
		'debug'
	],
	app: {
		dns: 'blank',
		version: 'v0.0.1',
		page_title: 'Blank',
		header: 'Test'
	},
	lang: {
		base: 'en'
	},
	server: {
		rest: {
			dns: '',
			url: 'api/v1/Test'
		},
		authentification: {
			dns: '',
			url: 'login'	
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