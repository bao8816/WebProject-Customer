const Product = require('../models/Product');
const Cart= require('../models/Cart');
const { multipleMongooseToObject,mongooseToObject } = require('../../util/mongoose');
const Customer_profile = require('../models/Customer_profile');
const mongoose = require('../../util/mongoose');
const { findById } = require('../models/Product');
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
    profile(req, res,next) {
        if (!req.user) {
            res.redirect('/login');
        }
        else {
            Customer_profile.findOne({email: req.user.email})
                .then(customer_profile => {  
                    res.render('profile', {
                        layout: 'profile-layout',
                        profile: mongooseToObject(customer_profile)
                    });
                })
                .catch(err => {
                    next(err);
                });
            
        }
    };
    editcustomer(req,res,next) {
            if(!req.user) {
                res.redirect('/login');
            }   
            else {
                Customer_profile.findById(req.params.id)
                .then(customer_profile => {
                    res.render('edit', {
                        layout: 'edit-layout',
                        profile: mongooseToObject(customer_profile)
                    });
                })
                .catch(err => {
                    next(err);
                });

                }
        }
    updatecustomer(req,res,next) {
        if(!req.user) {
            res.redirect('/login');
        }
        else {
            Customer_profile.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(customer_profile => {
                res.redirect('/profile');
            });
        }
    }
    
};

module.exports = new CustomerController();
