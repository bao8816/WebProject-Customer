const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Information = new Schema({
    email: {type: String,required: true},
    name: {type: String, default:'NAME'},
    dateofbirth: {type: Date, default: Date.now},
    image: String,
    permissions: String,
    phone: String,
});

module.exports = mongoose.model('Information', Information);
