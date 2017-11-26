const router = require('express').Router();
const passport = require('passport');

// route to check if a user is logged in
// If a user is logged in, Passport middleware creates a user object on the request object.
// the user object comes from the 'users' collection in the database (i.e. they are the same)
router.get('/', (request, response) => {
  if (request.user) {
    // is user is logged in
    response.json({
      loggedIn: true,
      user: request.user,
    });
  } else {
    // is user is not logged in
    response.json({
      loggedIn: false,
      user: {},
    });
  }
});

// ----- OAUTH STEP 1: Passport Middleware ----- //
// passport middleware redirects the user to google sign in
router.get('/google', passport.authenticate('google', {
  // scope specifies what information we are requesting from the users Google profile
  scope: ['profile'],
}));

// ----- OAUTH STEP 2: Passport Middleware ----- //
// After the user logs in, google redirects back to this route as defined in passport-setup.js
// Google sends back a token in the url that can be used to get the users data.

// NOTE: user profile info is not sent back after the user signs in, Passport must make a subsequent
// request with previosuly provided token to get info. Passport does this for us behind the scenes.

// on resonse, the callback function in passport-setup.js fires
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/' }), (request, response) => {
  // ----- OAUTH STEP 5 ----- //
  // on success OR failure to sign in, user is redirected to home page
  // if successfull, user now has a valid cookie
  response.redirect('/');
});

// Destroy users session (cookie) and redirect to home
router.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});

export default router;
