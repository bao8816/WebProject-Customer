const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');

router.get('/profile', customerController.profile);
router.get('/login', customerController.login);
router.get('/signup', customerController.signup);
router.get('/', customerController.home);

module.exports = router;
