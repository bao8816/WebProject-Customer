class CustomerController {
    //GET "/"
    home(req, res) {
        res.render('home', {layout: 'home-layout'})
    }

    //GET "/profile"
    profile(req, res) {
        res.render('profile', {layout: 'profile-layout'})
    }

    //GET "/login"
    login(req, res) {
        res.render('login', {layout: 'iden-layout'})
    }

    //GET "/signup"
    signup(req, res) {
        res.render('signup', {layout: 'iden-layout'})
    }
}

module.exports = new CustomerController;