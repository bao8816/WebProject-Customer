const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    user: String,
    password: String,
});

module.exports = mongoose.model('Account', Account);
