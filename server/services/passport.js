const passport = require("passport");
const keys = require("../config/keys");
const googleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access Token: ", accessToken);
      console.log("refresh Token: ", refreshToken);
      console.log("profile ", profile);
    }
  )
);
