const express = require ('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

const getJoke = require('./lib/joke');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

app.get('/', async (req,res) => {
    let data = await getJoke();
    let joke = data.joke;
    res.render('index', {joke});
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});