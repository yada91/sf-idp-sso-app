var SamlStrategy = require('passport-saml').Strategy

module.exports = function (passport, config) {

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

	passport.use(new SamlStrategy(
	  {
	    path: config.passport.saml.path,
	    entryPoint: config.passport.saml.entryPoint,
	    issuer: config.passport.saml.issuer,
	    cert: config.passport.saml.cert,
	    identifierFormat: config.passport.saml.identifierFormat,
	  },
	  function(profile, done) {
	  	console.log(profile);
		return done(null,
			{
				id : profile.nameID,
				email : profile.email,
				username : profile.username,
				displayName: profile.fullname,
				nickname: profile.nickname,
			});
	  })
	);

}
