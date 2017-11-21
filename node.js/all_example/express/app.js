var express = require('express');
var fs=require('fs');
var bodyParser=require('body-parser');



var app = express();


var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.use(express.static('static'));

app.get('/', function (req, res) {
  /*res.render('index.html');*/
  
});

app.get('/tmp', function (req, res) {
  res.sendFile(__dirname+'/static/tmp.html');
});

app.post('/pic', urlencodedParser,function (req, res) {
	let body=req.body.name;
	if(body=='1'){res.send('zhivotnye_serdce_krolik_1569.jpg')}
	/*let body2=req.body.d;
	let body3=req.body.g;*/
	
	
	//let body=JSON.stringify(req.body);
	
	

	/*
fs.readdir('./'+body+'', (err, files) => {
		let f="";
  files.forEach(file => {
f=file+",";
  });
	res.send(f)
  
});*/
});
app.post('/folder', urlencodedParser,function (req, res) {
	
	fs.readdir(__dirname, (err, files) => {
		let f=[];
			  files.forEach(file => {
				f=[...f,file];
			  });
				

	let body=req.body.name;
	if(f.indexOf(body)==-1){res.send('net')}
	else{
		fs.readdir('./'+body+'', (err, files) => {
		let f=[];
			  files.forEach(file => {
				f=[...f,file];
			  });
				res.send(f)
			  
})
		
		
	}
	});
	/*let body2=req.body.d;
	let body3=req.body.g;*/
	
	
	//let body=JSON.stringify(req.body);
	
	

	/*
;*/
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});