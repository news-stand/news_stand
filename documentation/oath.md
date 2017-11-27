# News Stand Authentication Strategy #

The News Stand application uses Google's OAuth2.0 API in conjunction with the NPM [Passport](http://www.passportjs.org/) module.

Passport is a flexible framework that can handle many different types of authentication. Passport if configured to a specific authentication imllmentation by use of they call a [Strategy](http://www.passportjs.org/packages/)

Our strateg is defined in `./app/server/config/passport-setup.js` as:

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
