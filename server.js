var express = require('express');
var app = express();
var port = 8099;
var primes = require('./primes.js');
var fs = require('fs');
var protobuf = require('protobufjs');

app.get('/', function(req, res){
    //res.writeHead(200, {'Content-type': 'text/html'});
    //res.write('Hello HTML');
	fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
})

app.get('/isPrime/:number', function(req, res){
    res.status(200).send(primes.isPrime(req.params.number));    
})

protobuf.util.setProperty({}, "__proto__.someprop", "somevalue");

exports.stop = function(){
    server.close();
}
var server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
