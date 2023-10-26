
// questions
Explain how does the internet work in your own words.
// fist client will make request a request. A http request is then send to the server which is running on particular prototype. Server recieves the request. Server contains all the data which has access to the database. Now the response is sent back to the client with required resourceLimits.

// What are the core modules of node js?
// In Node.js, Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiple files/folders. The reason programmers are heavily reliant on modules is because of their reusability as well as the ability to break down a complex piece of code into manageable chunks. 
// core modules
// http	creates an HTTP server in Node.js.
// assert	set of assertion functions useful for testing.
// fs	used to handle file system.
// path	includes methods to deal with file paths.
// process	provides information and control about the current Node.js process.
// os	provides information about the operating system.
// querystring	utility used for parsing and formatting URL query strings.
// url	module provides utilities for URL resolution and parsing.


// What are relative path and absolute path? How to define them?
// The path with reference to root directory is called absolute. The path with reference to current directory is called relative.
// In computer file systems, a relative path is a file path that specifies the location of a file or directory relative to the current working directory. An absolute path specifies the location of a file or directory relative to the root directory of the file system.
// let relativePath = './app.js';
// let absolutePath = path.resolve(relativePath); ///Users/scott/projects/skynet/app.js


// What does createServer do?
// The createServer() method in Node.js creates a new HTTP server object. The server object can then be used to listen for incoming requests and respond to them.The createServer() method takes two arguments: a request listener function and an optional options object. The request listener function is called whenever a new request comes in. The options object can be used to configure the server, such as the port it will listen on.


// What are anonymous functions?
// An anonymous function in Node.js is a function that does not have a name. It is often used as a callback function, which is a function that is passed to another function as an argument and is called when that function completes its execution.

// What do you think server.listens exactly do?Why do we need it?
// The server.listens() method is used to start a server and listen for incoming connections. The method takes two arguments: the port number and the backlog. The port number is the number that the server will listen on. The backlog is the number of connections that the server can queue before it starts rejecting connections.
// We need to use server.listens() because it allows us to create a server that can listen for incoming connections. Without this method, we would not be able to create a server that could accept connections from clients.



const http = require('http');
//create a server object:
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Pushkar');//write a response to the client
        res.end();//end the response
    }
    // console.log(req);
})

server.listen(4000);//the server object listens on port 4000
