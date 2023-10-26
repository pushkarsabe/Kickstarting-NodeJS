console.log('this is first js file');

const fs = require('fs');

//to create a new file with content inside a folder
fs.writeFileSync('hello.txt', 'this is file created with write file function');

//question - 1
console.log('hello world');
