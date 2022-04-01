const express = require('express')
const router = express.Router()
const customerController = require('../app/controllers/CustomerController')

router.use('/profile', customerController.profile)
router.use('/login', customerController.login)
router.use('/signup', customerController.signup)
router.use('/', customerController.home)

module.exports = router
