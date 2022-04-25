const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cartstemp = new Schema({
    email: String,
    products: [
        {
            product_id: {type: String, required: true, ref: 'Product'},
            quantity: {type: Number, required: true},
        }
    ],
});

module.exports = mongoose.model('Cartstemp', Cartstemp);
