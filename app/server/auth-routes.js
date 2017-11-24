const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}));

router.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});

router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/' }), (request, response) => {
  response.redirect('/');
});


export default router;
