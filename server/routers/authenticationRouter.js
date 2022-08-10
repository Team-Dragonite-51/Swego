const express = require('express');
const authController = require('../controllers/authController');

const passport = require('passport');
// const passportService = require('./auth/auth');

const requireAuth = passport.authenticate('jwt', {session: false});

const router = express.Router();

router.post('/signup', authController.signup, authController.activateJWT, (req, res) => {
    return res.status(200).json(res.locals.officialToken);
})

router.post('/login', authController.login, authController.activateJWT, (req, res) => {
    return res.status(200).json(res.locals.elevenIfTrue);
})

module.exports = router;
