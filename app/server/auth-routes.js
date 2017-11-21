const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}));

router.get('/logout', (request, response) => {
  response.send('logging out');
});

router.get('/google/redirect', passport.authenticate('google'), (request, response) => {
  response.send('you got to last cb');
});

export default router;
