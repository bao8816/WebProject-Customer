const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/web_project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error: ', error);
    }
};

module.exports = { connect }
