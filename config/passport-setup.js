const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

console.log(process.env.CLIENT_ID);
passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: '/auth/google/redirect',
}, (accessToken, refreshToken, profile, done) => {
  console.log('passport fired', profile);
}));
