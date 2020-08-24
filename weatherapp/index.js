const express = require('express');
const hbs = require ('express-handlebars');
const path = require ('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const weatherRouter = require('./routes/weather');
const errRouter = require('./routes/err');

const app = express ();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine ('hbs', hbs({
    extname: 'hbs',
    defaultLayout:'main',
    layoutsDir: path.join(__dirname, 'views','layouts'),
    partialsDir: path.join(__dirname, 'views','partials')
}));

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('*', errRouter)

app.listen(3000, () => {
    console.log('listening on port 3000');
});