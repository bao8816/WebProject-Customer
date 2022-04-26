const Product = require('../models/Product');
const Customer_account = require('../models/Customer_account');
const Customer_profile = require('../models/Customer_profile');
const Cart= require('../models/Cart');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {
    //GET "/[products]"
    show(req, res, next) {

        Product.findOne({slug: req.params.slug})
            .then(product => {
                res.render('products/product', {
                    layout: 'home-layout',
                    product: mongooseToObject(product)
                });
            })
            .catch(next);
        
    }
    //Show shoping bag
    shoppingbag(req, res,next) {
        if(!req.user){
            res.redirect('/login');
        }
        else {
            Cart.findOne({email: req.user.email})
                .populate({
                    path: 'products.product_id',
                })
                .then(cart=> {
                    res.render('products/shoppingbag', {layout: 'shoppingbag-layout',products: mongooseToObject(cart.products)});
                })
                .catch(err=>{
                    res.redirect('/');
                })
            
            
        }
    }
    // addcart(req,res){
        
    //     if(!req.user){
    //         res.redirect('/login');

    //     }
    //     else{ 
    //         Cart.findOne({email: req.user.email})
    //             .then(cart=> {
    //                 cart.products.findOne({product_id: req.params.id})
    //                     .then(product=> product.quantity+=1 ,
    //                         product.save(),
    //                         cart.save())
    //                     .catch(err=> {
    //                         cart.updateOne(
    //                             {email: req.user.email},
    //                             {
    //                                 products: [
    //                                     {
    //                                         $push:{
                                                
    //                                             product_id: req.params.id,
    //                                             quantity: 1,
                                                
    //                                         }
    //                                     }
    //                                 ]
    //                             }
    //                         )
                        
                        
    //                     });
    //             })
    //             .catch(err){
                    
    //             }
             
    //     }
    // }
};

module.exports = new ProductController();
