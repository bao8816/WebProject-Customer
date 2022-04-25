const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');

const authController = require('../app/controllers/AuthController');
const Customer_account = require('../app/models/Customer_account');

passport.use(new LocalStrategy(function verify(username, password, cb) {
    Customer_account.findOne({ email: username }, function (err, user) {
        if (err) { 
          return cb(err); 
        }
        if (!user) { 
          return cb(null, false); 
        }
        if (!bcrypt.compareSync(password, user.password)) { 
          return cb(null, false); 
        }
        return cb(null, user);
    }
    );
}
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, email: user.email });
    });
  });
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });



// Route

router.get('/login', authController.show_login);
router.get('/login-error', authController.show_login_error);
router.post('/login/password', passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login-error',
    }));

router.get('/logout', authController.logout);

router.get('/signup', authController.show_signup);
router.post('/signup', authController.signup);



module.exports = router;
