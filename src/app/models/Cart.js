const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    email: {type: String, required: true, unique: true, ref: 'Customer_profile'},
    products: [
        {
            product_id: {type: String, required: true, unique: true, ref: 'Product'},
            quantity: {type: Number, required: true},
        }
    ],
    }
);

Cart.pre('save', function(next) {
    this.price = this.products.reduce((acc, cur) => {
        return acc + cur.product_id.price * cur.quantity;
    }, 0);
    next();
});

Cart.pre('update', function(next) {
    this.price = this.products.reduce((acc, cur) => {
        return acc + cur.product_id.price * cur.quantity;
    }, 0);
    next();
});

module.exports = mongoose.model('Cart', Cart);

