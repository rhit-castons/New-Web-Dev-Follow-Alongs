
// const http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.end('Hello World!');
// }) .listen(8081);

// console.log('Server is running');



// const fs = require("fs");
// const data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");

const fs = require("fs");
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");

