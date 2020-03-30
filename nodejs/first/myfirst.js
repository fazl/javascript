/*
You can run this as a server application with node, thus:

node myfirst.js

Then you can access it over http by opening the url http://localhost:8080 in your browser

This gets a page with:

Hello Javascript Server world!

Note: if you try using https you may see this:
Error code: SSL_ERROR_RX_RECORD_TOO_LONG
*/

var http = require('http');

var msg = 'Hello Javascript Server world!'; 

/*
var handler = function(req, res){
    console.log('req.url=' + req.url);
    if(req.url === '/favicon.ico') {
        console.log('Favicon was requested');
    }
        console.log('Sending response: '+msg);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(msg);
}
*/

http.createServer(function(req, res){
        console.log('req.url=' + req.url);
        if(req.url === '/favicon.ico') {
            // chrome has a bug, calls url again for favicon..
            console.log('Favicon was requested');
        }
        console.log('Sending response: '+msg);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(msg);
}).listen(8080);


