var http=require('http');
  var fs=require('fs');
 
 new http.Server(function(req,res){
	if(req.url == '/'){ 
		var file=new fs.ReadStream('russian.dic');//это входной поток данных
		sendFile(file,res);
		
	}
 
 }).listen(3000);
 
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