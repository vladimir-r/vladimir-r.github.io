var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/public"));

app.post("/index", urlencodedParser, function (request, response) {
if(!request.body) return response.sendStatus(400);
if (request.body.action=='readDir'){
    var files = fs.readdirSync(request.body.current);
    console.log(files);
    var result ={};
    for (var key in files) {
        if (files[key][0]!='.'){
            var stats = fs.statSync(request.body.current + files[key]);
            result[files[key]]= {};
            if (stats.isFile()) {
                result[files[key]].type = 'file';
            }
            else if (stats.isDirectory()){
                result[files[key]].type = 'dir';
            }
            result[files[key]].path = request.body.current+files[key]+'/';
        }
    }
    response.send(result);
}
if (request.body.action=='createFolder'){
    fs.mkdir(request.body.current+request.body.name,function(e){
        if(e && e.code === 'EEXIST'){
            response.send( e);
        } 
        else {
            response.send('1');
        }
    });
}
if (request.body.action=='createFile'){
    fs.writeFile(request.body.current+request.body.name, request.body.text, function(error){
        if(error) response.send(err); 
            response.send( "1");
        });
}
});


app.listen(3000);