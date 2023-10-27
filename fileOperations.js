
//questions
// What is the use of having buffers and streams? When would you use it?.
// A buffer is a space in memory (usually RAM) that temporarily stores binary data. The purpose of this space is to help any running entity not lose data during a transfer using a FIFO system.In Nodejs we can manipulate these memory spaces with the module called Buffer built into its core. Buffers are widely used when working with binary data at the network level. Let us remember that many of the Nodejs modules and functionalities work implicitly based on events and manipulation of Buffer / Streams, such as the core File System or HTTP modules that store the temporary data flow in a Buffer.Here are some important features of Buffers:
// Buffers are stored in a sequence of integers.
// Once created they cannot be resized.
// Stream - They are information flows that are used in the transmission of binary data. They are also a way to handle network communications or any kind of back-and-forth data exchange efficiently, by breaking information down into smaller pieces.Streams work sequentially.
// The information is transmitted through “chunks” (pieces).
// Streams rely on buffers to manage content.
// Nodejs has a module called stream that helps us with the manipulation of these flows, but depending on the case we will use some type of stream.
// In general, there are 4 types of Streams in Nodejs:
// Writable: Streams in which we can write data.
// Readable: Streams receiving input data.
// Duplex: Streams that are both read and written.
// Transform: Streams that can modify or transform data as it is written and read.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.txt', (err, data) => {
            if (err) {
                console.log('err = ' + err);
            }
            console.log('data = ' + data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        })

    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        //this will fire event for data in chunks and push it into the array
        req.on('data', (chunk) => {
            console.log('chunk = ' + chunk);
            body.push(chunk);
        });
        //this will fire an end event to stop the data incoming and convert the data into string
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsedBody = ' + parsedBody);
            const messageBody = parsedBody.split('=')[1];
            console.log("messageBody = " + messageBody);
            //to handle the file writing unsynchronuosly we use writeFile instead of writeFileSynch
            fs.writeFile('message.txt', messageBody, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })

    }
    // else {
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My First Page</title><head>');
    //     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }
});

server.listen(3000);