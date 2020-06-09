To create a new express server:
Create a new directory and cd into it.
$ npm init -y / This will give you the package.json file.
$ npm i express / This will give you the rest of the files needed.
Create an index.js file and a index.html file.

In index.js create a new express server using the variables const express & const app.
Make the server listen (app.listen) to a port (3000 usually) and log to the console to confirm it is working.

Install nodemon so that any changes are applied automatically without having to restart the server.
$ npm install -g nodemon 
Update package.json with the following under scripts "start": "nodemon index.js"
$ nodemon [your-app-name]

Using handlebars: $ npm i express-handlebars --save //Handlebars should now appear in your package.json file.
Create a new directory in your app folder called views.
Create a new directory inside views called layouts.
Inside the layouts folder create a hbs called main.hbs .
Inside the views folder create two hbs files called index.hbs (this can be your index.html file amended and moved) & about.hbs .

main.hbs should contain the HTML5 template and be where you pull the data from index.hbs using handlebars {{{}}}.
index.hbs should contain the data which you want to pull into the main page via the handlebar.
about.hbs this is an additional page to the homepage on the local host.

Your index.js file should also be updated with a new variable requiring handlebars (e.g const hbs = require('express-handlebars)).
Use the app.engine function to convert the .hbs extensions to html files to be displayed. 
Use the app.get function to render the pages and content to be displayed

To pull in an API to generate a random joke: 
Create a new .js file within the lib folder
Install node fetch - $ npm i node-fetch
On the .js page (joke.js in this case) you need to require node-fetch.
Create a variable for the API URL that you want to use.
Create an async and await function to pull in the url and display the data in JSON format. 
Call the function. Export the module.
In index.js you need to import the .js file from the lib folder. Use app.get to pull in the function and render the data that you want to show.
Use handlebars to pull the data into the index.hbs file for it to display on the webpage.