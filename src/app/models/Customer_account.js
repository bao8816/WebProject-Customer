const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer_account = new Schema({
    email: {type: String,required: true},
    password: {type: String,required: true},
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Customer_account', Customer_account);
