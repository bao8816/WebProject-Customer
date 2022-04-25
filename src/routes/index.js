const customerRouter = require('./customer');
const authRouter = require('./auth');

function route(app) {
    app.use('/', authRouter)
    app.use('/', customerRouter)
    
};

module.exports = route;
