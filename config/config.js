module.exports = {
	development : {
		app : {
			name : process.env.APP_NAME,
			port : process.env.PORT || 3000,
			backUrl: process.env.SF_HOME,
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint: process.env.SAML_ENTRYPOINT,
				issuer : process.env.SAML_ISSUER,
				cert: process.env.SAML_CERT,
				identifierFormat: process.env.SAML_IDENTIFIER_FORMAT,
				
			}
		}
	},
	production : {
		app : {
			name : process.env.APP_NAME,
			port : process.env.PORT || 3000,
			backUrl: process.env.SF_HOME,
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint: process.env.SAML_ENTRYPOINT,
				issuer : process.env.SAML_ISSUER,
				cert: process.env.SAML_CERT,
				identifierFormat: process.env.SAML_IDENTIFIER_FORMAT,
				
			}
		}
	}
}
