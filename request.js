// const http = require('http');

// const server = http.createServer((req, res) => {
//     // process.exit() //to quit the process
//     console.log(req.url, req.headers, req.method);

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>ly First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server:</h1></body>');
//     res.write('</html>');
//     res.end();
// })
// server.listen(3000);


//questions-
// Explain the nodejs event driven architecture.
// Event-driven architecture is a software design pattern that enables components to communicate and interact with each other through events. In event-driven architecture, components are not aware of each other, but instead they communicate by sending events to each other. Events are objects that represent something that has happened, such as a user clicking a button or a file being created.
// When an event occurs, it is sent to the appropriate component, which then handles the event. The component can handle the event by performing an action, such as updating the user interface or sending a message to another component.
// Event-driven architecture is a good choice for applications that need to be able to handle a large number of events simultaneously. For example, a web server that needs to be able to handle a large number of HTTP requests would be a good candidate for event-driven architecture.


// How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded?
// Node. js can handle thousands of requests per second because of its asynchronous and event-driven nature. Asynchronous programming allows Node. js to perform multiple tasks at once without blocking the main thread. This is in contrast to traditional programming, where each task must be completed before the next one can begin.
// Event-driven programming allows Node. js to respond to events as they occur, rather than waiting for them to happen. This means that Node. js can always be ready to handle new requests, even if it is currently processing other requests.

// What does process.exit do?
// The process.exit() method is used to end the Node.js process. It takes a single parameter, which is the exit code. The exit code can be 0 or 1, where 0 indicates a successful exit and 1 indicates an unsuccessful exit.

// What does req.url , req.header and req.method contain?
// req.url is a string that contains the currently requested URL path. It includes the entire path of the request, including dynamic URL parameters and query parameters.
// A request URL consists of: 
// An HTTP method
// A base URL
// A resource URI
// The req.headers object in Node.js contains the request headers sent by the client to the server. The headers are a collection of name-value pairs that provide information about the request, such as the type of data being sent, the client's browser, and the client's location.
// The req.method property in Node.js contains a string that corresponds to the HTTP method of the request. The HTTP method is a verb that indicates what the client wants to do with the resource. For example, a GET request retrieves a resource, a POST request creates a new resource, a PUT request updates an existing resource, and a DELETE request deletes a resource.


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);

    if (req.url === '/home') {
        res.write('Welcome home');
        res.end();
    }
    if (req.url === '/about') {
        res.write('Welcome to About Us page');
        res.end();
    }
    if (req.url === '/node') {
        res.write('Welcome to my Node Js project');
        res.end();
    }

})
server.listen(3000);