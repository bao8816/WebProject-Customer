const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    slug: String,
});

module.exports = mongoose.model('Product', Product);
