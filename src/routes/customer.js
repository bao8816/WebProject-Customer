const express = require('express');
const CustomerController = require('../app/controllers/CustomerController');
const router = express.Router();
const customerController = require('../app/controllers/CustomerController');
const productController = require('../app/controllers/ProductController');
router.get('/mybag', productController.shoppingbag);
router.get('/profile', customerController.profile);
<<<<<<< Updated upstream
router.get('/products/:slug', productController.show);
router.put('/:id',productController.addcart);
=======
router.get('/:slug', productController.show);
router.get('/profile/edit', customerController.editcustomer);
router.put('/profile/:id', customerController.profile);
>>>>>>> Stashed changes
router.get('/', customerController.home);
module.exports = router;
