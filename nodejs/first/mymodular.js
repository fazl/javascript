// See myfirst.js for intro

var http = require('http');
var url = require('url');
var mymodule = require('./myfirstmodule');

/*  This error appears when there is no matching module file 
    Note the actual line 4 is mentioned TWELVE LINES into the output!
    
C:\dev\nodejs\first>node mymodular.js
internal/modules/cjs/loader.js:985
  throw err;
  ^

Error: Cannot find module './myfirstmodule'
Require stack:
- C:\dev\nodejs\first\mymodular.js
[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:982:15)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:864:27)[39m
[90m    at Module.require (internal/modules/cjs/loader.js:1044:19)[39m
[90m    at require (internal/modules/cjs/helpers.js:77:18)[39m
    at Object.<anonymous> (C:\dev\nodejs\first\mymodular.js:4:16)*/

var hello = 'Modular Javascript Server world! '; 

http.createServer(function(req, res){
        console.log('req.url=' + req.url);
        if(req.url === '/favicon.ico') {
            // chrome has a bug, calls url again for favicon..
            console.log('Favicon was requested');
        }
        var msg = req.url + ' requested at: <br>' + mymodule.myDateTime();
        console.log('Sending response: '+msg);
        res.writeHead(200, {'Content-Type' : 'text/html', 'connection':'close'});
        res.end(msg);
}).listen(8080);


