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

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(8080, ip);
 
module.exports = app;