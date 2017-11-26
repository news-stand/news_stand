import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from '../database/models/user';

dotenv.config();

// ----- OAUTH STEP 4: More Passport Middleware ----- //
passport.serializeUser((user, done) => {
  // use id from database to make a session and put it in the cookie
  done(null, user.id);
});

// ----- OAUTH: Check to see if user has a valid session ----- //
passport.deserializeUser((id, done) => {
  // decode cookie token and check to see if valid
  User.findById(id).then((user) => {
    done(null, user);
  });
});


// Setup Google Strategy.
// clientId and clientSecret come from singing up for Oauth through the Google Developer Console
// https://console.developers.google.com/apis
// callbck URL specifies where google shoudl send the user after they sign in
// this route is handles in auth-routes.js
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: '/auth/google/redirect',
}, (accessToken, refreshToken, profile, done) => {
  // ----- OAUTH STEP 3: More Passport Middleware ----- //
  // profile has been sent back in exchange for token
  User.findOne({ googleId: profile.id })
  //  check if user is already in database
    .then((currentUser) => {
      if (currentUser) {
        // if they are, send send porfile to next middleware (Step: 4)
        done(null, currentUser);
      } else {
        // if they aren't, create new user and send to next middleware (Step: 4)
        new User({
          username: profile.displayName,
          googleId: profile.id,
          profileImg: profile.photos[0].value,
          topics: ['net neutrality'],
          selectedSources: [{ label: 'TechCrunch', id: 'techcrunch' }],
        }).save()
          .then((newUser) => {
            done(null, newUser);
          });
      }
    })
    .catch((err) => {
      console.log('catch error', err);
    });
}));
