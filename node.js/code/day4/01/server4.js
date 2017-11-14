var http = require('http');
var fs   = require('fs');

http.createServer(function(request, response) {

    function routeLoad(path) {
        fs.readFile(path, { encoding: 'utf8' }, function(error, file) {
            if (!error) {
                response.writeHead(200, { 'Content-Type': 'text/html'});
                response.write(file);
                response.end();
            }
        });
    }

    var url = request.url;
    console.log(url);
    if      (url=='/one') routeLoad('one.html');
    else if (url=='/two') routeLoad('two.html');
    else if (url=='/images/1.jpg') {
        // response.writeHead(200, {"Content-Type" : "image/jpeg"})
        fs.createReadStream("images/1.jpg").pipe(response);
    }
    else {
        response.setHeader("Content-Type", "text/html");
        response.write("<h2>404</h2>");
        response.end();
    }


}).listen(3000);

