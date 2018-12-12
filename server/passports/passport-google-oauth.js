const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser(function(user, done) {
	// done(null, user.id);
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	// Users.findById(obj, done);
	done(null, obj);
});

passport.use(
	new GoogleStrategy(
		// Use the API access settings stored in ./config/auth.json. You must create
		// an OAuth 2 client ID and secret at: https://console.developers.google.com
		{
			clientID:
				"751433226059-cigo3ik9dnr7lbi4f24ovtepte0rltpj.apps.googleusercontent.com",
			clientSecret: "y-UwUkfHQ3faUtyi5QSsoImg",
			callbackURL: "/auth/google/redirect"
		},
		function(accessToken, refreshToken, profile, done) {
			console.log("======================================");
			console.log("Name: ", profile.displayName);
			console.log("E-mail: ", profile.emails[0].value);
			console.log("======================================");
			console.log("======================================");
			console.log("Info below using for backend with google-token");
			console.log("======================================");
			console.log("======================================");
			console.log("Access-Token: ", accessToken);
			console.log("======================================");
		}
	)
);
