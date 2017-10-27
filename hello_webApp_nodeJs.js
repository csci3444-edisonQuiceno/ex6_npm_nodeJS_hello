// Load HTTP module, which is a simple http web server, that comes as part of nodeJs install
var http = require("http");

// Write web app to return static content of "Hello web application using nodeJS", that will be served at port 8012
http.createServer(function(request, response) {
    // set response HTTP header with status code and content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // finally send the response body
    response.end("Hello web application using nodeJS");
}).listen(8012);

// Print URL of above server serving simple web app
console.log("nodeJS' http server started to serve http://127.0.0.1:8012  or http://localhost:8012");

// Write web app to return static content of "Hello web application using nodeJS with fat arrow ..", that will be served at port 8013
http.createServer((request, response) => {
    // set response HTTP header with status code and content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // finally send the response body
    response.end("Hello web application using nodeJS with 'fat arrow' lambda instead of function expression");
}).listen(8013);

// Print URL of above server serving simple web app
console.log("nodeJS' http server started to serve http://127.0.0.1:8013  or http://localhost:8013");