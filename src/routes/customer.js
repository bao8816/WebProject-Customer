const express = require('express');
const CustomerController = require('../app/controllers/CustomerController');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');
const productController = require('../app/controllers/ProductController');

router.get('/products/:slug', productController.show);
router.get('/profile/edit', customerController.editcustomer);
router.put('/profile/:id', customerController.updatecustomer);
router.get('/mybag', productController.shoppingbag);
router.get('/profile', customerController.profile);

// router.put('/:id',productController.addcart);
router.get('/', customerController.home);
module.exports = router;
