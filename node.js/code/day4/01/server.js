var http = require("http");
var url = require('url');

http.createServer(function(request, response){

    // console.log("Url: " + request.url);
    var url1 = url.parse(request.url, true);
    // console.log(url.parse());
    // console.log("Тип запроса: " + request.method);
    // console.log("User-Agent: " + request.headers["user-agent"]);
    // console.log("Все заголовки");
    // console.log(request.headers);
    console.log(url1);
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html");
    response.write("<h2>hello world</h2>");
    response.end();
}).listen(3000);