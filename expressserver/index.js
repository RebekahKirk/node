const express = require('express'); // import express (express is a built in module) PRE-ES6
// import express from 'express'; //ES6 - Require correct syntax to make this work
const hbs = require('express-handlebars'); //imports the handlebar templates
const path = require ('path');
// const getPeople = require('./lib/people');
const getPlaceholder = require('./lib/getplaceholder');

// const getPerson = require ('./lib/person'); // Shows the person data from person.js

const app = express (); //calling the function express() in express

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views','layouts'),
    partialsDir: path.join(__dirname, 'views','partials')
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req,res) => {
    // let data = getPerson();
    // let data = getPeople();
    // let name = data.name;
    let data = await getPlaceholder();
    // console.log(data);
    res.render('index', {data, listExists: true});
});

app.get('/about', (req,res)=>{
    res.render('about'); 
});

app.get('*', (req,res)=>{
    res.render('404'); 
});

app.listen(3000, ()=>{
    console.log("Listening to port 3000");
});

// app.get('/', (req, res)=>{
//     let name = "Rebekah";
//     res.render('index', {name}); //when the page reloads it will render your name
// });

// app.get('/', (req,res)=>{
//     res.render('index'); //renders the homepage and detail
// });

// app.get('/about', (req,res)=>{
//     res.render('about'); // renders the about page and detail
// });

// app.listen(3000, ()=>{
//     console.log("Listening to port 3000");
// });

// app.get('/', (req, res) =>{ //This shows the homepage
//     // res.send('Your first node express project!')
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/about', (req, res) =>{ //This shows the about page
//     // res.send('Your first node express project!')
//     res.sendFile(__dirname + '/about.html');
// });

// console.log(__dirname + '/about.html'); // logs the file name in the console
// console.log(__dirname, '/node_modules'); // logs the folder name in the console
// console.log(__filename);

// app.listen(3000, () => {
//     console.log("Listening to port 3000")
// });