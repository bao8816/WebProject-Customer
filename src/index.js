const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

//Require Route
const route = require('./routes');

//Database
const db = require('./config/db');

//Connect to Database
db.connect();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// ------Routes------
route(app);
/*-----End route----*/

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
