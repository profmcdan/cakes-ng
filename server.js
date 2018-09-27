const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-google");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

// Set up cookies
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect to db
mongoose.connect(
  keys.mongodb.dbURI,
  { useNewUrlParser: true },
  () => {
    console.log("Database Connected");
  }
);

//  Set up routes
app.use("/auth", authRoutes);

// Create home route
app.get("/", (req, res) => {
  return res.send("Test OK");
});

// Listen to a port number
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
