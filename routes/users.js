const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

module.exports = router;

router.get('/profile', users.profile);
