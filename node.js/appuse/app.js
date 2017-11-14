var express = require('express');
var fs=require('fs');
var app = express();





app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');

  fs.readFile('user.json', function(err, data){
    if (err) throw err;
    var text =JSON.parse(data);
    console.log(text);
})


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});


app.get('/user/:id',function(req,res,next){
		
		/*
		for(var key in  json){
			if(key == req.params.id){
			console.log(key)
		}
		}*/
	res.render('index', {out: req.params.id});
	
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});