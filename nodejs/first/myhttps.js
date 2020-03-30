var https = require('https');

// This does NOT work just out of the box.. 
// Docs at https://www.w3schools.com/nodejs/ref_https.asp MISLEADING
//
https.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080);