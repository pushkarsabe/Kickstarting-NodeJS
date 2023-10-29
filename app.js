const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(4000);

// question
// What problem does nodemon solve ?
//     Nodemon is a tool that helps with the development of Node.js applications by automatically restarting the node application when file changes in the directory are detected.This means that you do not have to stop and restart your applications in order for your changes to take effect.You can simply write code, and test your application a few seconds later.

// When would you use --save-dev and --save?
// --save flag is used to save a package as a production dependency. Production dependencies are the packages that your application needs to run in a production environment, meaning the packages that are required for your application to function properly when it's deployed.

// --save-dev  flag is used to save a package as a development dependency. Development dependencies are the packages that you need during development, but they are not required for your application to run in a production environment. Typically, development dependencies include tools for testing, building, or other development-related tasks.

