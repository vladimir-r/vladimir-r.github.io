
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app =  express();

app.use(express.static('public'));

app.use('/myGetReq', bodyParser.urlencoded({
    extended: true
}));
/*
app.get('/', function (req, res) {
    res.sendFile('index.html');
  });
*/
/*app.get('/', function (req, res) {
	console.log('helo');
    var a = req.body;
    console.log(a);
    res.send(a);
});*/

app.post('/myGetReq', function (req, res) {
    var a = req.body;
    console.log(a);
    res.send(a);
});
*/
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });