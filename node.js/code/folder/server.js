const http = require('http');
const fs=require('fs');
const path=require('path');//разбираем путь к файлам и директориям
const url=require('url');//разбираем строку
const bodyParser=require('body-parser');// разбираем запросы
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
	
	
	let urlParsed=url.parse(req.url,true);//true разбирает строку в обьект
	//console.log(urlParsed);
	if(urlParsed.pathname=='/'){ 
		res.statusCode = 200;
		 res.setHeader('Content-Type', 'text/html');
		 
		let data=ReadFile('./view/index.html');
		 res.write(data,'utf8');
		 res.end();
		 
	}
 else if(urlParsed.pathname=='/admin'){ 
 /*let dir=ReadFolder(path.join(__dirname));
		console.log(dir);*/
		let pathf=path.resolve(__dirname, __filename);
		//console.log(path.resolve(__dirname, __filename));
		
		res.setHeader('Content-Type', 'text/html');
		res.write('<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>Document</title><script src="'+process.cwd()+'\\public\\js\\js.js" defer></script></head><body><h1>'+pathf+'</h1></body></html>');
		res.end()
		
 }
  else{
	  res.statusCode = 400;
 
  res.end('Page not found');
	  
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function ReadFile(name){return fs.readFileSync(name)};
	

function ReadFolder(name){
	
fs.readdir('.', (err, files) => {return files});

	
}

