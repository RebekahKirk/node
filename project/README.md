Create a new directory and cd into it.
$ npm init -y / This will give you the package.json file.
$ npm i express / This will give you the rest of the files needed.
Create an index.js file and a index.html file.

In index.js create a new express server using the variables const express & const app.
Make the server listen (app.listen) to a port (3000) and log to the console to confirm it is working.
Use app.get function to send a messge back to the user via the client.

Install nodemon so that any changes are applied automatically without having to restart the server.
$ npm install -g nodemon 
Update package.json with the following under scripts "start": "nodemon index.js"
$ nodemon [your-app-name]

