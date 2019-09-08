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
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});