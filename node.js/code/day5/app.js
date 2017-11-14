var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

http.createServer(function (req, res) {
    console.log(req.method);
    // console.log(req.headers);
    if (req.method == 'POST') {
        let body = [];
        req.on('data', function (data1) {
            console.log(data1.toString());
            console.log('data');
            // res.setHeader('Content-Type', 'text/html');
            // res.writeHead(200);
            res.end('lalalala');
        });
    }
    else {
        var parsedUrl = url.parse(req.url, true); // true to get query as object
        var queryAsObject = parsedUrl.query;
       // console.log(queryAsObject );
        //--------
        var uri = url.parse(req.url).pathname;
        var filename = path.join(process.cwd(), unescape(uri));
        var stats;

        try {
            stats = fs.statSync(filename); // throws if path doesn't exist
        } catch (e) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            res.end();
            return;
        }
        if (stats.isFile()) {
            // path exists, is a file
            var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];
            res.writeHead(200, {'Content-Type': mimeType});

            var fileStream = fs.createReadStream(filename);
            fileStream.pipe(res);
        } else if (stats.isDirectory()) {
            // path exists, is a directory
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Index of ' + uri + '\n');
            res.write('its index?\n');
            res.end();
        } else {
            // Symbolic link, other?
            // TODO: follow symlinks?  security?
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('500 Internal server error\n');
            res.end();
        }
    }

}).listen(3000);