const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
const passportConf = require("../passport");

const { validateBody, schemas } = require("../helpers/routeHelpers");
const UsersController = require("../controllers/users");
const passportSignIn = passport.authenticate("local", { session: false });
const passportJWT = passport.authenticate("jwt", { session: false });

/**
 * I'm using router for promises, u can use or not
 * I create joi file to validate for data when pass to routes. U can see it ./helpers/routeHelpers.js
 * Why I use method post for oauth google?
 * Answers: I and my team make that issues, if u use get method for this case. We will don't
 * take data from profile (Passport.js ONLY handles authentication -- it doesn't handle authorization at all.)
 */

router
	.route("/signup")
	.post(validateBody(schemas.authSchema), UsersController.signUp);

router
	.route("/signin")
	.post(
		validateBody(schemas.authSchema),
		passportSignIn,
		UsersController.signIn
	);

router
	.route("/oauth/google")
	.post(
		passport.authenticate("googleToken", { session: false }),
		UsersController.googleOAuth
	);

router.route("/secret").get(passportJWT, UsersController.secret);

module.exports = router;
