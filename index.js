var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send(`
  	<style>
  		.text {
  			font-size: x-large;
  		}
  	</style>
  	<br><br>
  	<center>
  	<div class="text">Hello World!</div>
  	<center>
  	`);
});
/*
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0';

var server = http.createServer(function () {
  console.log('Example app listening on port 3000!');
});
server.listen(port, ip);