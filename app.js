const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

//questions 
// Did you understand event loop ? Please explain it in your words if you did.If you didnt please raise a question in next class.
// The event loop is what allows Node.js to perform non - blocking I / O operations — despite the fact that JavaScript is single - threaded — by offloading operations to the system kernel whenever possible.

// Since most modern kernels are multi - threaded, they can handle multiple operations executing in the background.When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.