var events=require('events');
var emitter=new events.EventEmitter();

emitter.on('foo',function(){
	console.log('In foo handler')
});

emitter.on('eho',function(){console.log('ggggggg')})


emitter.fff=function(){emitter.emit('eho')};

//--------


emitter.fff();


emitter.emit('foo');



