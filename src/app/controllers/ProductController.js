const Product = require('../models/Product');
const Cartstemp= require('../models/cartstemp');
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
    shoppingbag(req, res) {
        res.render('products/shoppingbag', {layout: 'shoppingbag-layout'})
    }
};

module.exports = new ProductController();
