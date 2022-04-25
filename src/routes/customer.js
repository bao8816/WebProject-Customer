const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');
const productController = require('../app/controllers/ProductController');

router.get('/profile', customerController.profile);
router.get('/login', customerController.login);
router.get('/signup', customerController.signup);
router.post('/signup',customerController.signupr);
router.post('/login',customerController.loginr);
router.get('/:slug', productController.show);
router.get('/', customerController.home);
router.get('/mybag', productController.shoppingbag);
module.exports = router;
