var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');



console.log(path.resolve(__dirname, __filename));
console.log(typeof(__dirname));

new http.Server(function(req,res){
	if(req.url == '/'){
		let ext=path.extname(__filename);
			res.setHeader('Content-Type', 'text/plain');
		res.write(path.dirname(__dirname));
		res.write('\n'); 
		res.write(__dirname);
		res.write('\n');
		res.write(path.resolve(__dirname,__filename));
		res.write('\n');
		res.write(path.extname(__filename));
			res.write('\n');
			res.write(path.basename(__filename,ext));
		res.end()
	}
 
 }).listen(3000)