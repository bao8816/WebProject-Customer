const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const Customer_profile = require('../models/Customer_profile');
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
        if (!req.user) {
            res.redirect('/login');
        }
        else {
            Customer_profile.findOne({email: req.user.email})
                .then(profile => {  
                    res.render('profile', {
                        layout: 'profile-layout',
                        profile: mongooseToObject(profile)
                    });
                })
        }
    };
};

module.exports = new CustomerController();
