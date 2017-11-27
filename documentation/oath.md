# News Stand Authentication Strategy #

The News Stand application uses Google's OAuth2.0 API in conjunction with the NPM [Passport](http://www.passportjs.org/) module.

Passport is a flexible framework that can handle many different types of authentication. Passport is configured by selection and implementation of a specific [Strategy](http://www.passportjs.org/packages/)

Our strategy is defined in `./app/server/config/passport-setup.js` as:

```node
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: '/auth/google/redirect',
}
```
The `clientID` and `ClientSecret` are provided through the [Google Developer Console](https://console.developers.google.com/apis) when you sign up for an account and enable the Google+ API for a project. The `callbackURL` tells Google where to redirect the user when they have signed in through the Google Web Page.

Our Authentication routes can be found in `./app/server/auth-routes.js`

These routes utilize the passport middleware to handle sessions, cookie creation, routing, redirecting, and database integration.

## Routes ##

there are 4 main routes that deal with handling initial authentication.

### Step 1 ###
Redirect user to Google's sign in page and specify what information you are requesting through the `Scope` value. Google will send back a token that can be exchnaged for a user's profile info on a subsequent request. This token comes back as a parameter in the URL.
```node
router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}));
```
### Step 2 ###
**Passport Middleware (NOT the callback function)**

Triggers passport middleware that will return to google with the user-specific token in exchange for profile information.

```node
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/' }), (request, response) => {

});
```

### Step 3 ###
When Google responds with the requested profile infomration the callback function defined in the strategy runs. We check to see if we alredy have the user in the database, or we create a new user. Either way, a user profile is passed to the next middleware function.

```node
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: '/auth/google/redirect',
}, ----> (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then((currentUser) => {
      if (currentUser) {
        done(null, currentUser);
      } else {
       ## Create new User
       ## Save new User
          .then((newUser) => {
            done(null, newUser);
          });
      }
    }) <----
```

### Step 4 ###
Passport uses the profile ID to create an encrypted sessin token and adds it to the cookie on the response object.
```node
passport.serializeUser((user, done) => {
  done(null, user.id);
});
```

### Step 5 ###
**Callback function (NOT passport middleware)**

our middleware finally fires and directs the user based on whether or not they were authenticated. In this case, they are both redirected to `"/"`

```node
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/' }), (request, response) => {
  response.redirect('/');
});
```

## Misc ##
### Logout ###
Destroy the user's cookie by invoking `request.logout()`
```node
router.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});
```
### Authenticate Request ###
Checks to see if a user has a valid session. If a users is authenticated, Passport adds a `user` object to the `request` object. 

To check if a user is logged in on any route we can check to see if `request.user` exists. The user object contains the users info from the database.

```node
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
```

### Cookie Setup ###
Set cookie life and key for encoding and decoding google profile ID
```node
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY],
}));
```

### Initialize ###
initilaize passport middleware
```node
app.use(passport.initialize());
app.use(passport.session());
```