const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PassportSetup = require("./passports/passport-google-oauth");

// Using Promise for mongoose (Only Options, u can use or not)
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === "test") {
	mongoose.connect(
		"mongodb://localhost/CircleKTest",
		{ useMongoClient: true }
	);
} else {
	mongoose.connect(
		"mongodb://localhost/CircleK",
		{ useMongoClient: true }
	);
}

const app = express();

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === "test") {
	app.use(morgan("dev"));
}

app.use(bodyParser.json());

// Routes
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));

module.exports = app;
