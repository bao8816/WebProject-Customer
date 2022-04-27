const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const expressHandlebarsSections = require('express-handlebars-sections');
const app = express();
const process = require('process');
//Require Route
const route = require('./routes');

//Database
const db = require('./config/db');

//Connect to Database
db.connect();

const port = process.env.PORT||3000;

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  helpers: {
    section: expressHandlebarsSections(),
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//-------Passport Config-------
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  // store: MongoStore.create({
  //   mongoUrl: 'mongodb://localhost:27017/web_project'
  // })
}));
app.use(passport.authenticate('session'));

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
}
);
//--------------------------------
// ------Routes------
route(app);
/*-----End route----*/

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
