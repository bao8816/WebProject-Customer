const Product = require('../models/Product');
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
};

module.exports = new ProductController();
