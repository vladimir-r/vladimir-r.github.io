const http = require('http');
const url=require('url');
const fs=require('fs');
const pathG=require('path');
const server = http.createServer((req, res) => {
	
	let path=url.parse(req.url).pathname;
	
	
	let stats = fs.statSync('server.js');
	console.log(stats)
	// console.log(url.parse(req.url));
	// console.log(__dirname,__filename);
	if(path=="/admin"){res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 res.write('<h1>Hello admin</h1>');
 res.end();
 }
 else if(path=="/"){
	 let data=fs.readFileSync('index.html');
	 	let stats = fs.statSync('index.html');
	console.log(pathG.extname('index.html'));
	if(stats.isDirectory()){console.log(stats)}
	else{console.log('Directory')}
	
	 res.setHeader('Content-Type', 'text/html');
	res.write(data);
	 res.end("<a href=''>linki</a>");
 }
 else if(path=="/static/style.css"){
	 let data=fs.readFileSync(__dirname+'/static/style.css');
	 
	 res.setHeader('Content-Type', 'text/css');
	res.write(data);
	 res.end();
 }else if(path=="/static/js.js"){
	 let data=fs.readFileSync(__dirname+'/static/js.js');
	 
	 res.setHeader('Content-Type', 'text/javascript');
	res.write(data);
	 res.end();
 }
  else if(path=="/text.txt"){
	 let data=fs.readFileSync('text.txt');
	 
	 res.setHeader('Content-Type', 'text/plain');
	res.write(data);
	 res.end();
 } 
 
 else if(path=="/dinamic/764.jpg"){
	 let data=fs.readFileSync(__dirname+'/dinamic/764.jpg');
	 
	 res.setHeader('Content-Type', 'image/jpg');
	res.write(data);
	 res.end();
 }
 else if(path=='/hhh'){
	 res.writeHead(200, {"Content-Type" : "image/jpg"});
	  var stream = fs.createReadStream(__dirname + '/dinamic/764.jpg');
	  	 //res.setHeader('Content-Type', 'image/jpg');
    stream.pipe(res);
			 
 }
 
 
	else{
	
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/html');
 res.write('<h1>No page</h1>');
 res.end();
	}
});


server.listen(3000,'localhost', () => {
  console.log(`Server running `);
});