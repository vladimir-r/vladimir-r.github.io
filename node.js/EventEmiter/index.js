var EventEmitter = require('events').EventEmitter;  
  
var server = new EventEmitter();  
  
server.on('request', function(request) {  
  //request.approved = true;  
});  
  
server.on('request', function(request) {  
  console.log(request);  
}); 
 
  server.on('error', function(err) {
   // if(err)console.log('ggggggg')
    if(err)console.log(err)
});
 server.on('oooo',function(oooo){
	 console.log(oooo)
 })

 
server.emit('request', {from: "Client"});
 
server.emit('request', {from: "Another Client"});
server.emit('request', {from: "thirdd Client"});
server.emit('oooo', {from: "ooooo"});
//server.emit('error', new Error ("server error"));