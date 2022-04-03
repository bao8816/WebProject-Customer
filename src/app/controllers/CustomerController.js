const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CustomerController {
    //GET "/"
    home(req, res, next) {

        Product.find({})
        .then(products => { 
            res.render('home', {
                layout: 'home-layout',
                products: multipleMongooseToObject(products)
            }); 
        })
        .catch(err => { 
            next(err); 
        });

    };

    //GET "/profile"
    profile(req, res) {
        res.render('profile', {layout: 'profile-layout'})
    };

    //GET "/login"
    login(req, res) {
        res.render('login', {layout: 'iden-layout'})
    };

    //GET "/signup"
    signup(req, res) {
        res.render('signup', {layout: 'iden-layout'})
    };
};

module.exports = new CustomerController;
