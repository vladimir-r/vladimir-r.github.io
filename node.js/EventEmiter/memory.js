var EventEmitter = require('events').EventEmitter;  
  
var server = new EventEmitter; 
//server.on('onError',function(){console.log('gggg')});
function Request() {  
  var self = this;  
  
  this.bigData = new Array(1e6).join('*');  
 /* 
  this.send = function(data) {  
    //console.log(data);  
	return this.bigData
  };  
    */
  this.onError = function(data) {  
    self.send("извините, у нас проблема");  
  };  
}  
  
setInterval(function() {  
  var request = new Request();  
  console.log(process.memoryUsage().heapUsed);  
  //console.log(request.send());  
  //server.emit('onError')
  
}, 200);  