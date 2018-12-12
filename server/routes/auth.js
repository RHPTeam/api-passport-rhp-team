const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");

router
	.route("/google")
	.get(passport.authenticate("google", { scope: ["openid email profile"] }));

router.route("/google/redirect").get(passport.authenticate("google"), () => {
	console.log("wait... I'm checking");
});

module.exports = router;
