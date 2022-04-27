const mongoose = require('mongoose');
const process = require('process');
async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error: ', error);
    }
};

module.exports = { connect }
