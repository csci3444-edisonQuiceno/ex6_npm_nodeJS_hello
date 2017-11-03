/**
 * Example of creating 2 web apps that listen on port 8012 and 8013, 
 * that serves a static 
 * "Hello web application using nodeJS" and 
 * "Hello web application using nodeJS with 'fat arrow' lambda instead of function expression"
 * as text/plain back respectively.
 * These nodeJS web apps are created using http module, a very basic http server, that comes as part of nodeJS
 * 
 * Only dependency is node being installed before.
 * 
 * Can start both apps at command line via
 * node hello_webApp_nodeJs
 * or
 * node hello_webApp_nodeJs.js
 */
// Load HTTP module, which is a simple http web server, that comes as part of nodeJs install
var http = require("http");

// block_1
// Write web app to return static content of "Hello web application using nodeJS", that will be served at port 8012
http.createServer(function(request, response) {
    // set response HTTP header with status code and content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // finally send the response body
    response.end("Hello web application using nodeJS");
}).listen(8012);

// Print URL of above server serving simple web app
console.log("nodeJS' http server started to serve http://127.0.0.1:8012  or http://localhost:8012");


// block_2
// Write web app to return static content of "Hello web application using nodeJS with fat arrow ..", that will be served at port 8013
http.createServer((request, response) => {
    // set response HTTP header with status code and content type
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // finally send the response body
    response.end("Hello web application using nodeJS with 'fat arrow' lambda instead of function expression");
}).listen(8013);

// Print URL of above server serving simple web app
console.log("nodeJS' http server started to serve http://127.0.0.1:8013  or http://localhost:8013");