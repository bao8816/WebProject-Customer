const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');
const productController = require('../app/controllers/ProductController');
router.get('/mybag', productController.shoppingbag);
router.get('/profile', customerController.profile);
router.get('/:slug', productController.show);
router.get('/', customerController.home);
module.exports = router;
