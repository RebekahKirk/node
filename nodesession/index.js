const http = require('http'); //Create a variable called HTTP and importing the HTTP core module.
const fs = require('fs');

const port = 3000;
const hostname = "localhost";

const server = http.createServer((request, response) =>{
    console.log(`Request made ${request.url}`); // details who the request for a server was made from in the console.
    if(require.url === '/home' || request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(_dirname + '/index.html').pipe(response);// Use createReadStream() in order to read the file located in the current directory with the file name index.html // .pipe() sends the answer so it can be displayed.
    }
    // response.writeHead(200, {'Content-Type': 'text/plain'}); //writeHead(statuscode, type of response)
    // response.write('Hello World!');
    // response.end();
})

// server.listen(3000, "localhost", () =>{
//     console.log("Server listening to port 3000")
// }); // Listen to port 3000 and log in the console that you are running it

server.listen(port, hostname, () =>{
    console.log(`Server listening to port http://${hostname}:${port}`);
}); // If the host or the port is variable this will tell you where it is connecting to via the console.