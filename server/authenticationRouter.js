const express = require('express');
const bcryptController = require('./bcryptController');
const router = express.Router();

router.post('/signup', bcryptController.signup, (req, res) => {
    return res.status(200).json(res.locals.hash);
})

router.post('/login', bcryptController.login, (req, res) => {
    return res.status(200).json(res.locals.elevenIfTrue);
})

module.exports = router;
