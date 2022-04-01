const customerRouter = require('./customer')


function route(app) {
    app.use('/', customerRouter)
}

module.exports = route;
