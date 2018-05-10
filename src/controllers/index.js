const express = require('express');

const router = express.Router();

// require controllers
const home = require('./home');
const challenges = require('./challenges');
const challenge = require('./challenge');
const userChallenge = require('./user_challenge');

// set up routes
router.get('/', home.get);
router.get('/challenges', challenges.get);
router.get('/challenge/:id', challenge.get);

router.post('/user-challenge/:id', userChallenge.post);

module.exports = router;
