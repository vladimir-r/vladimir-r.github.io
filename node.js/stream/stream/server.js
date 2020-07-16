/*var http=require('http');
  var fs=require('fs');
 
 new http.Server(function(req,res){
	if(req.url == '/'){ 
		let data=fs.readFileSync('russian.dic',{ encoding: 'utf8' });
		res.write(data);
		
		res.end()
		
		
		/*var file=new fs.ReadStream('russian.dic');//это входной поток данных
		sendFile(file,res);
		
	}
 
 }).listen(3000,()=>console.log('server'));
 */
 const http=require('http');
const fs=require('fs');
http.createServer(
function(req,res){
const stream=fs.createReadStream('russian.dic');
let f=0;
let ddd="";
stream.on('data',function(err,chunk)
{
	if(err.code=='ENOENT'){
	console.log('file not found');
  }else{
	console.error(err)
  }
	f++;
	//data+=chunk;//
	//console.log(f);
	var s=ddd+chunk;
	// console.log(chunk.toString());
	res.write(s);
}
);
let head='<html><head><meta charset="utf-8"></head><body>';

res.write(head);

stream.pipe(res)
}
	).listen(3000,()=>{console.log('serv')});
 
 
 
 
 
 

 
 //var strem=fs.createReadStream('file');
 
 
 /*
 function sendFile(file,res){
	file.pipe(res);
	
	file.on('error',function(){
		res.statusCode=500;
		res.end('Server Errror');
		console.log(err)
	});

	file.on('open',function(){
		console.log(res);
			console.log('open');
	}).on('close',function(){
			console.log('close');
	});

		res.on('close',function(){// сигнал что соединение было оборвано
		file.destroy();// вызываем метод- прерываем поток, соответсвенно файл будет закрыт 
	});	
		
 }
 
 */