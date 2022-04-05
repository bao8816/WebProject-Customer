const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    email: {type: String,required: true},
    password: {type: String,required: true},
    name: {type: String, default:'NAME'},
    dateofbirth: {type: Date, default: Date.now},
    image: String,
    permissions: String,
});

module.exports = mongoose.model('Account', Account);